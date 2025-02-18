"use client"
import { Card } from '@/app/components/card'
import {  Article, getDataAPI, TempArticles } from '../lib/data'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import { useUserContext } from '../context/user/useUserContext';

export default function CardWrapper() {
    const dataContext = useUserContext()
    console.log(dataContext, 'dataContext')
    const searchParams = useSearchParams();
    const query = searchParams.get('query')?.toString().toLowerCase() || '';
    const [stateArticles, setArticles] = useState<Article[] | undefined>([])
    
    useEffect(() => {
        const getData = async () => {
            const { articles } : TempArticles = await getDataAPI()
            const filtArt = articles?.filter(art => 
                art.title.toLowerCase().includes(query) || 
                art.description.toLowerCase().includes(query)
            );
            setArticles(filtArt)
        } 
        getData()
    }, [query])
    
    
    // console.log('Fetched articles:', query)
    if (stateArticles?.length === 0) {
        return <p className="text-gray-500">Ничего не найдено</p>;
    }
    
    return (
        <>
            {stateArticles?.map((art) => <Card key={art.id} title={art.title} description={art.description} image={art.image} id={art.id} content={art.content}/>)}
        </>
    )
}