import React, { Suspense } from 'react';
// import { getData } from '../lib/data';
// import { Card } from '../components/card';
import CardWrapper from './components/cardWrapper';
import Search from './components/search';

export default async function MainPage(props: { searchParams?: Promise<{query?: string, page?: string}>}) {
  // const { articles } = await getData()
  // console.log(typeof(articles), 'this is article obj')
  // if (!Array.isArray(articles)) {
  //   return <div>Error: Data is not an array</div>;
  // }

  const searchParams = await props.searchParams
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1

  return (
    <div className="flex flex-col bg-[#f9f5f0] min-h-screen h-full text-gray-900 font-inter">
      <header className="bg-white shadow-md px-6 py-2 sticky top-0 z-10">
        <div className="container mx-auto flex gap-3 justify-between items-center">
          <h1 className="hidden md:block text-2xl font-bold text-[#3f3e39f8]">Psychotherapy News</h1>
          <Search placeholder='Поиск...'/>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-[#7a6b64] hover:text-[#5a4a42] font-medium">Home</a></li>
              <li><a href="#" className="text-[#7a6b64] hover:text-[#5a4a42] font-medium">Categories</a></li>
              <li><a href="#" className="text-[#7a6b64] hover:text-[#5a4a42] font-medium">Trending</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto mt-6 px-6 flex flex-col grow h-full gap-8 md:flex-row">
        {/* News List */}
        <section className="md:w-2/3">
          <h2 className="text-3xl font-semibold mb-3 text-[#5a4a42]">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Suspense key={query + currentPage} fallback={'fallback'}>
              <CardWrapper query={query}/>
            </Suspense>
          </div>
        </section>
        
        {/* Sidebar */}
        <aside className="md:w-1/3 bg-white shadow-lg rounded-xl p-5">
          <h2 className="text-2xl font-semibold mb-4 text-[#5a4a42]">Popular Articles</h2>
          <ul className="space-y-4">
            <li><a href="#" className="text-[#b29889] hover:underline">Popular Article 1</a></li>
            <li><a href="#" className="text-[#b29889] hover:underline">Popular Article 2</a></li>
            <li><a href="#" className="text-[#b29889] hover:underline">Popular Article 3</a></li>
          </ul>
        </aside>
      </main>
      
      <footer className=" bg-white shadow-md mt-4 p-6 text-center text-[#7a6b64]">
        <p>&copy; 2025 Psychotherapy News. All rights reserved.</p>
      </footer>
    </div>
  );
} 
