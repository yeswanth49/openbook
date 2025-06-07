import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/api/:path*']
};

// Simple in-memory rate limiting store
// In production, use Redis/KV store for distributed rate limiting
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const WINDOW = 60; // seconds
const LIMIT = 60; // requests per window

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  return 'unknown';
}

function logRequest(
  ip: string,
  userAgent: string,
  path: string,
  status: number,
  duration: number,
  rateLimitRemaining: number
) {
  const logData = {
    timestamp: new Date().toISOString(),
    ip,
    userAgent,
    path,
    status,
    duration,
    rateLimitRemaining,
    type: 'api_request'
  };
  
  console.log(JSON.stringify(logData));
}

export default async function middleware(request: NextRequest) {
  const startTime = Date.now();
  const ip = getClientIP(request);
  const userAgent = request.headers.get('user-agent') || 'unknown';
  const path = request.nextUrl.pathname;
  
  // Rate limiting logic
  const key = `ratelimit:${ip}`;
  const now = Date.now();
  const windowStart = Math.floor(now / (WINDOW * 1000)) * (WINDOW * 1000);
  
  let rateLimitData = rateLimitStore.get(key);
  
  // Reset if we're in a new window
  if (!rateLimitData || rateLimitData.resetTime !== windowStart) {
    rateLimitData = { count: 0, resetTime: windowStart };
  }
  
  rateLimitData.count++;
  rateLimitStore.set(key, rateLimitData);
  
  // Clean up old entries periodically
  if (Math.random() < 0.01) { // 1% chance to clean up
    const cutoff = now - (WINDOW * 2 * 1000); // Keep 2 windows worth
    for (const [k, v] of rateLimitStore.entries()) {
      if (v.resetTime < cutoff) {
        rateLimitStore.delete(k);
      }
    }
  }
  
  const remaining = Math.max(0, LIMIT - rateLimitData.count);
  
  // Check if rate limit exceeded
  if (rateLimitData.count > LIMIT) {
    const duration = Date.now() - startTime;
    logRequest(ip, userAgent, path, 429, duration, remaining);
    
    return NextResponse.json(
      { error: 'Too many requests' },
      { 
        status: 429,
        headers: {
          'X-RateLimit-Limit': LIMIT.toString(),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': ((windowStart + WINDOW * 1000) / 1000).toString(),
          'Retry-After': WINDOW.toString()
        }
      }
    );
  }
  
  // Continue to the API route
  const response = await NextResponse.next();
  
  // Add rate limit headers to response
  response.headers.set('X-RateLimit-Limit', LIMIT.toString());
  response.headers.set('X-RateLimit-Remaining', remaining.toString());
  response.headers.set('X-RateLimit-Reset', ((windowStart + WINDOW * 1000) / 1000).toString());
  
  // Log the request
  const duration = Date.now() - startTime;
  const status = response.status;
  logRequest(ip, userAgent, path, status, duration, remaining);
  
  return response;
} 