import React from 'react';

export default function Home() {

  return (
    <div className="bg-[#f9f5f0] text-gray-900 font-inter">
      <header className="bg-white shadow-md px-6 py-2 sticky top-0 z-10">
        <div className="container mx-auto flex gap-3 justify-between items-center">
          <h1 className="hidden md:block text-2xl font-bold text-[#3f3e39f8]">Psychotherapy News</h1>
          <input type="text" placeholder="Search..." className="border p-3 rounded-lg w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b29889]" />
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-[#7a6b64] hover:text-[#5a4a42] font-medium">Home</a></li>
              <li><a href="#" className="text-[#7a6b64] hover:text-[#5a4a42] font-medium">Categories</a></li>
              <li><a href="#" className="text-[#7a6b64] hover:text-[#5a4a42] font-medium">Trending</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto mt-10 px-6 flex flex-col gap-8 md:flex-row">
        {/* News List */}
        <section className="md:w-2/3">
          <h2 className="text-3xl font-semibold mb-6 text-[#5a4a42]">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 bg-white p-5 shadow-lg rounded-xl transition-transform transform hover:scale-105">
              <img src="https://via.placeholder.com/300" alt="News" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4 text-[#5a4a42]">Article Title</h3>
              <p className="text-[#7a6b64] text-sm mt-2">Short description of the article...</p>
              <a href="#" className="text-[#b29889] font-medium mt-3 inline-block">Read more →</a>
              
            </div>
            <div className="bg-white p-5 shadow-lg rounded-xl transition-transform transform hover:scale-105">
              <img src="https://via.placeholder.com/300" alt="News" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4 text-[#5a4a42]">Article Title</h3>
              <p className="text-[#7a6b64] text-sm mt-2">Short description of the article...</p>
              <a href="#" className="text-[#b29889] font-medium mt-3 inline-block">Read more →</a>
            </div>
            <div className="bg-white p-5 shadow-lg rounded-xl transition-transform transform hover:scale-105">
              <img src="https://via.placeholder.com/300" alt="News" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4 text-[#5a4a42]">Article Title</h3>
              <p className="text-[#7a6b64] text-sm mt-2">Short description of the article...</p>
              <a href="#" className="text-[#b29889] font-medium mt-3 inline-block">Read more →</a>
            </div>
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
      
      <footer className="bg-white shadow-md mt-12 p-6 text-center text-[#7a6b64]">
        <p>&copy; 2025 Psychotherapy News. All rights reserved.</p>
      </footer>
    </div>
  );
} 
