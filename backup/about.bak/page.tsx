// This page is statically generated and revalidated every 24 hours
export const revalidate = 86400;

import * as React from 'react';
import { Button } from "@/components/ui/button";

export default function SimpleLandingPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">OpenBook</h1>
        <p className="mb-6">Your smart Notebook. Coming soon.</p>
        <Button className="bg-black text-white hover:bg-gray-800">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
