"use client"
import { useEffect, useReducer, useRef, useState } from "react";
import { AppState, CounterId, DecrementAction, IncrementAction, store } from "../lib/store";

const selectCounter = (state: AppState, counterId: CounterId) => state.counters[counterId];

export default function Counter({ counterId } : { counterId: CounterId }) {    
    console.log('render', counterId)

    const [isShow, setIsShow] = useState(true)
    const [state, forceUpdate] = useReducer((x) => x + 1, 0);
    
    const lastStateRef = useRef<ReturnType<typeof selectCounter>>(undefined)

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const currentState = selectCounter(store.getState(), counterId);
            const lastState = lastStateRef.current
            if (currentState !== lastState) {
                forceUpdate()
            }
            lastStateRef.current = currentState
        }) 

        return unsubscribe
    }, [])

    const counterState = selectCounter(store.getState(), counterId)
    return (
        <>  
            <button onClick={() => setIsShow(!isShow)}>clic {state}</button>
            {isShow && <>
                <div className="text-xl bg-slate-600 text-sky-500 px-6">
                    counter {counterState?.counter}
                </div>
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
            }
        </>
    )
}

