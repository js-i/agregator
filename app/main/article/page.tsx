import React from 'react';

export default function ArticlePage() {
  return (
    <div className="bg-[#f9f5f0] text-gray-900 font-inter min-h-screen">
      <header className="bg-white shadow-md p-6 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#5a4a42]">Psychotherapy News</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-[#7a6b64] hover:text-[#5a4a42] font-medium">Home</a></li>
              <li><a href="#" className="text-[#7a6b64] hover:text-[#5a4a42] font-medium">Categories</a></li>
              <li><a href="#" className="text-[#7a6b64] hover:text-[#5a4a42] font-medium">Trending</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto mt-10 max-w-3xl">
        <article className="bg-white p-8 shadow-lg rounded-xl">
          <h2 className="text-4xl font-bold text-[#5a4a42] mb-4">Article Title</h2>
          <p className="text-[#7a6b64] text-sm mb-6">Published on <span className="font-medium">January 30, 2025</span></p>
          <img src="https://via.placeholder.com/800x400" alt="Article" className="w-full h-auto rounded-lg mb-6" />
          <p className="text-[#5a4a42] text-lg leading-relaxed">
            This is the article content. It provides an in-depth analysis of psychotherapy-related topics,
            offering insights and professional opinions. The article is designed to be engaging and informative.
          </p>
          <p className="text-[#5a4a42] text-lg leading-relaxed mt-4">
            Further discussion on the topic, with examples, case studies, and references to relevant psychological studies.
          </p>
        </article>
      </main>
      
      <footer className="bg-white shadow-md mt-12 p-6 text-center text-[#7a6b64]">
        <p>&copy; 2025 Psychotherapy News. All rights reserved.</p>
      </footer>
    </div>
  );
}
