import React, { Suspense } from 'react';
import CardWrapper from './components/cardWrapper';

export default async function MainPage(props: { searchParams?: Promise<{query?: string, page?: string}>}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1

  return (
          <>
            <h2 className="text-3xl font-semibold mb-3 text-[#5a4a42]">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Suspense key={query + currentPage} fallback={'fallback'}>
                <CardWrapper query={query}/>
              </Suspense>
            </div>
          </>
  );
} 
