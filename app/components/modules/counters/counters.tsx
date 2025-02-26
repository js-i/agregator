"use client"
import { CounterId, selectCounter, incrementAction, decrementAction} from "./counters.slice";
import { AppState, useAppDispatch, useAppSelector } from "@/app/lib/store";

export default function Counter({ counterId } : { counterId: CounterId }) {    
    console.log('render counter', counterId)
    const dispatch = useAppDispatch();
    const counterState = useAppSelector((state : AppState) => selectCounter(state, counterId))
    return (
            <>  
                <div className="text-xl bg-slate-600 text-sky-500 px-6">
                    counter {counterState?.counter}
                </div>
                <button 
                    className='border-2 px-4 rounded' 
                    onClick={() => {dispatch(incrementAction({counterId: counterId}))}}
                >
                    increase
                </button>
                <button 
                    className='border-2 px-4 rounded'
                    onClick={() => {dispatch(decrementAction({ counterId: counterId}))}}
                >
                    decrease
                </button>
            </>
    )
}



