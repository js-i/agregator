'use client'
import { newsSlice, useNewsSelector } from "../lib/newsStore"
import LikedArticle from "./likedArticle"

export default function Aside() {
    const articles = useNewsSelector(state => newsSlice.selectors.selectLikedArticles(state))
    return (
        <aside className="md:w-1/4 bg-white shadow-lg rounded-xl p-5">
            <h2 className="text-2xl font-semibold mb-4 text-[#5a4a42]">Popular Articles</h2>
            <ul className="space-y-4">
                {articles && articles.map(art => <LikedArticle key={art.id} id={art.id} url={art.url} title={art.title}/>)}
            </ul>
      </aside>
    )
}

