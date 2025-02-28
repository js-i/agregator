'use client'
import { Article } from "@/app/lib/data"
import { useNewsSelector, newsSlice } from "@/app/lib/newsStore"
import Image from "next/image"
import Link from "next/link"

export default function ArticleleContent({id} : {id : string}) {
  const article = useNewsSelector((state) => newsSlice.selectors.selectArticle(state, id)) as Article | undefined
  console.log(article)
  if (!article) {
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
  
  return (
        <>
            <h2 className="text-4xl font-bold text-[#5a4a42] mb-4">{article.title}</h2>
            <p className="text-[#7a6b64] text-sm mb-6">Published on <span className="font-medium">{article.publishedAt}</span></p>
            <Image src={article.image} alt="articleicle" width={800} height={600} className="w-full h-auto rounded-lg mb-6" priority={true}/>
            <p className="text-[#5a4a42] text-lg leading-relaxed">
                {article.content}
            </p>
            <Link href={article.url} className="text-[#5a4a42] text-sm leading-relaxed mt-4 truncate w-40">
                {article.url}
            </Link>
            <button className="self-end text-[#5a4a42] border outline px-3 rounded-lg "><Link href={'/'}>Назад</Link></button>
        </>
  )
}

