import React from 'react';
import { getArticle, Article } from '@/app/lib/data';
import Link from 'next/link';
import Image from 'next/image';


export default async function ArticlePage({ params } : {params: Promise<{ article: string }>}) {
  const article = (await params).article
  let art: Article | undefined = undefined
  
  try {
    art = await getArticle(article)
  } catch (error) {
    console.error('error fetch', error)
  }
  
  if (!art) {
    return (
      <main className="container mx-auto mt-10 max-w-3xl">
        <article className="flex flex-col bg-white p-8 shadow-lg rounded-xl">
          <h2 className="text-4xl font-bold text-[#5a4a42] mb-4">Article not found</h2>
          <p className="text-[#7a6b64] text-sm mb-6">The article you are looking for does not exist or an error occurred while fetching it.</p>
          <b className="self-end">
            <Link href={'/'}>Назад</Link>
          </b>
        </article>
      </main>
  );
  }
  
  console.log(article, art, 'page - articles')
  return (
      <main className="container mx-auto mt-10 max-w-3xl">
        <article className="flex flex-col bg-white p-8 shadow-lg rounded-xl">
          <h2 className="text-4xl font-bold text-[#5a4a42] mb-4">{art.title}</h2>
          <p className="text-[#7a6b64] text-sm mb-6">Published on <span className="font-medium">{art.publishedAt}</span></p>
          <Image src={art.image} alt="Article" width={800} height={600} className="w-full h-auto rounded-lg mb-6" priority={true}/>
          <p className="text-[#5a4a42] text-lg leading-relaxed">
            {art.content}
          </p>
          <Link href={art.url} className="text-[#5a4a42] text-sm leading-relaxed mt-4 truncate w-40">
            {art.url}
          </Link>
          <button className="self-end text-[#5a4a42] border outline px-3 rounded-lg "><Link href={'/'}>Назад</Link></button>
        </article>
      </main>
  );
}
