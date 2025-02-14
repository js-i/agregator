import { Card } from '@/app/components/card'
import {  getDataAPI, TempArticles } from '../lib/data'

export default async function CardWrapper({  query }: { query: string}) {
    const { articles } : TempArticles = await getDataAPI()
    // console.log(articles)
    const filtArt = articles?.filter(art => art.title.includes(query) || art.description.includes(query))
    if (!filtArt || filtArt.length == 0) {
        return ('ничего не найдено')
    }
    return (
        <>
            {filtArt?.map((art, i) => <Card key={i} title={art.title} description={art.description} image={art.image} id={art.id} content={art.content}/>)}
        </>
    )
}