import { Card } from '@/app/components/card'
import { getData, TempArticles } from '../lib/data'

export default async function CardWrapper({  query }: { query: string}) {
    const { articles } : TempArticles = await getData()
    const filtArt = articles?.filter(art => art.title.includes(query) || art.description.includes(query))
    return (
        <>
            {filtArt?.map((art, i) => <Card key={i} title={art.title} description={art.description} image={art.image} id={art.id} content={art.content}/>)}
        </>
    )
}