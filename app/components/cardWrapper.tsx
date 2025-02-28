"use client"
import { Card } from '@/app/components/card'
import { useSearchParams } from 'next/navigation';
import { useNewsSelector, newsSlice } from '@/app/lib/newsStore'

export default function CardWrapper() {

    const searchParams = useSearchParams();
    const query = searchParams.get('query')?.toString().toLowerCase() || '';
    const reduxArticlesObj = useNewsSelector((state) => newsSlice.selectors.selectArticles(state, query))

    if (!reduxArticlesObj) {
        return <p className="text-gray-500">Ничего не найдено</p>;
    }
    console.log('render card wrapper')
    return (
        <>
            {reduxArticlesObj?.map((art) => <Card key={art.id} title={art.title} description={art.description} image={art.image} id={art.id} content={art.content} liked={art.liked}/>)}
        </>
    )
}


