"use client"
import { Card } from '@/app/components/card'
import {  Article, getDataAPI, TempArticles } from '../lib/data'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';

export default function CardWrapper() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query')?.toString().toLowerCase() || '';

    const [stateArticles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        async function getData() {
            const { articles } : TempArticles = await getDataAPI()
            setArticles(articles || [])
        }
        getData()
    }, [])
    
    
    // console.log('Fetched articles:', query)
    const filtArt = stateArticles.filter(art => 
        art.title.toLowerCase().includes(query) || 
        art.description.toLowerCase().includes(query)
    );

    if (filtArt.length === 0) {
        return <p className="text-gray-500">Ничего не найдено</p>;
    }
    
    return (
        <>
            {filtArt?.map((art) => <Card key={art.id} title={art.title} description={art.description} image={art.image} id={art.id} content={art.content}/>)}
        </>
    )
}