"use client"
import { useEffect, useReducer } from "react";
import { CounterId, DecrementAction, IncrementAction, store } from "../lib/store";


export default function Counter({ counterId } : { counterId: CounterId }) {    
    console.log(counterId)
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            forceUpdate()
        })
        return unsubscribe
    }, [])

    return (
        <>
            <div className="text-xl bg-slate-600 text-sky-500 px-6">counter {store.getState().counters[counterId]?.counter}</div>
            <button 
                className='border-2 px-4 rounded' 
                onClick={() => {store.dispatch({type: 'increment', payload: {counterId: counterId}} satisfies IncrementAction)}}
                >
                increase
            </button>
            <button 
                className='border-2 px-4 rounded'
                onClick={() => {store.dispatch({type: 'decrement', payload: {counterId: counterId}} satisfies DecrementAction)}}
                >
                decrease
            </button>

        </>
    )
}

