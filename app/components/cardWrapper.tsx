"use client"
import { Card } from '@/app/components/card'
import { useSearchParams } from 'next/navigation';
import { useNewsSelector, newsSlice } from '@/app/lib/newsStore'

export default function CardWrapper() {
    // const dataContext = useUserContext()
    // console.log(dataContext, 'dataContext')
    const searchParams = useSearchParams();
    const query = searchParams.get('query')?.toString().toLowerCase() || '';
    // const [stateArticles, setArticles] = useState<Article[] | undefined>([])
    
    const reduxArticlesObj = useNewsSelector((state) => newsSlice.selectors.selectArticles(state, query))
    // useEffect(() => {
    //     const getData = async () => {
    //         const { articles } : TempArticles = await getDataAPI()
    //         const filtArt = articles?.filter(art => 
    //             art.title.toLowerCase().includes(query) || 
    //             art.description.toLowerCase().includes(query)
    //         );
    //         setArticles(filtArt)
    //     } 
    //     getData()
    // }, [query])
    
    
    // console.log('Fetched articles:', query)
    if (!reduxArticlesObj) {
        return <p className="text-gray-500">Ничего не найдено</p>;
    }
    console.log('render card wrapper')
    return (
        <>
            {reduxArticlesObj?.map((art) => <Card key={art.id} title={art.title} description={art.description} image={art.image} id={art.id} content={art.content}/>)}
        </>
    )
}


