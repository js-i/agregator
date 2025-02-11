import React from 'react';
import { getArticle, Article  } from '@/app/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default async function ArticlePage({ params} : {params: Promise<{ article: string }>}) {
  const article = (await params).article
  const art: Article = await getArticle(Number(article))
  // console.log(article, art)
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
          <b className="self-end"><Link href={'/main/'}>Назад</Link></b>
        </article>
      </main>
  );
}
