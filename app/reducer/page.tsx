"use client"
import { useEffect, useReducer } from "react";
import { DecrementAction, IncrementAction, store } from "../store";


export default function Counter() {    
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            forceUpdate()
        })
        return unsubscribe
    }, [])

    return (
        <>
            <div className="text-xl bg-slate-600 text-sky-500 px-6">counter {store.getState().counter}</div>
            <button 
                className='border-2 px-4 rounded' 
                onClick={() => {store.dispatch({type: 'increment'} satisfies IncrementAction)}}
                >
                increase
            </button>
            <button 
                className='border-2 px-4 rounded'
                onClick={() => {store.dispatch({type: 'decrement'} satisfies DecrementAction)}}
                >
                decrease
            </button>

        </>
    )
}

function getArticle() {
    let articles
    const apikey = '58d4860ae2be054239c3f8c483215217';
    const url = 'https://gnews.io/api/v4/search?q=psychology&lang=en&country=us&max=10&apikey=' + apikey;

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('then in second then')
        articles = data.articles;
        console.log(articles)
        for (let i = 0; i < articles.length; i++) {
            console.log("Title: " + articles[i]['title']);
            console.log("Description: " + articles[i]['description']);
            break;
        }
    });
}