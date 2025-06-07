import { NextRequest } from 'next/server';

/**
 * Simple authentication check for API endpoints
 * Checks for Authorization header with Bearer token
 */
export function isAuthenticated(request: NextRequest): boolean {
    const authHeader = request.headers.get('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return false;
    }
    
    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    
    // For now, accept any non-empty token
    // In production, this should validate against a proper auth system
    return token.length > 0;
}

/**
 * Extract user ID from request (placeholder implementation)
 * In production, this would decode the token and extract user info
 */
export function getUserId(request: NextRequest): string | null {
    const authHeader = request.headers.get('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }
    
    const token = authHeader.substring(7);
    // For now, return a hash of the token as user ID
    // In production, decode JWT or validate with auth service
    return token.substring(0, 8);
} 