import React, { Suspense } from 'react';
import CardWrapper from './components/cardWrapper';

export default function MainPage() {
  
  return (
          <>
            <h2 className="text-3xl font-semibold mb-3 text-[#5a4a42]">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Suspense fallback={'fallback from suspense'}>
                <CardWrapper />
              </Suspense>
            </div>
          </>
  );
} 
