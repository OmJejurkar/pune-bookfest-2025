'use client';

import React from 'react';
import Link from 'next/link';

const TestVideoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Video Test Page</h1>
      
      {/* Direct HTML5 Video Test */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Direct HTML5 Video Test</h2>
        <video 
          width="800" 
          height="450" 
          controls
          autoPlay
          muted
          loop
          className="border border-gray-300"
        >
          <source src="/main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Image Test */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Image Test</h2>
        <img 
          src="/bookfest-logo.png" 
          alt="BookFest Logo" 
          width="200" 
          className="border border-gray-300"
        />
      </div>
      
      {/* Direct Link Tests */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Direct File Access Tests</h2>
        <div className="space-y-2">
          <div>
            <a 
              href="/main.mp4" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              Test Video File Direct Access
            </a>
          </div>
          <div>
            <a 
              href="/bookfest-logo.png" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              Test Logo Image Direct Access
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <Link 
          href="/" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default TestVideoPage;