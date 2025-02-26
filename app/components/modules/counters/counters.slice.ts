import { AppState } from "@/app/lib/store";
import { createAction, createReducer } from "@reduxjs/toolkit";

export type CounterId = string;
export type CounterState = { counter: number }
export type CountersState = Record<CounterId, CounterState >

export const incrementAction = createAction<{counterId: CounterId}>('counters/increment')
export const decrementAction = createAction<{counterId: CounterId}>('counters/decrement')

const initialCounterState = { counter: 0}
const initialCountersState: CountersState = {}

export const selectCounter = (state: AppState, counterId: CounterId) => state.counters[counterId];

export const countersReducer = createReducer(
    initialCountersState,
    (builder) => {
        builder.addCase(incrementAction, (state, action) => {
            const {counterId} = action.payload
            if (!state[counterId]) state[counterId] = initialCounterState
            state[counterId].counter++
        });
        builder.addCase(decrementAction, (state, action) => {
            const {counterId} = action.payload
            if (!state[counterId]) state[counterId] = initialCounterState
            state[counterId].counter--
        })
    }
)

// export type Action = IncrementAction | DecrementAction ;
// export type IncrementAction = {
//     type: 'increment',
//     payload: { counterId: CounterId}
// }

// export type DecrementAction = {
//     type: 'decrement',
//     payload: {counterId: CounterId}
// }
// (state = initialCounterState, action: Action): CountersState => {
//     switch (action.type) {
//         case "increment": {
//             const { counterId } = action.payload
//             const currentCounter = state[counterId] ?? initialCounterState
//             return {
//                 ...state,
//                 [counterId]: {
//                     ...currentCounter,
//                     counter: (currentCounter.counter ? currentCounter.counter : 0 ) + 1
//                 }
//             }
//         }
//         case "decrement": {
//             const { counterId } = action.payload
//             const currentCounter = state[counterId] ?? initialCountersState
//             return {
//                 ...state,
//                 [counterId]: {
//                     ...currentCounter,
//                     counter: (currentCounter.counter ? currentCounter.counter : 0 )- 1
//                     }
//                 }
//             }
//         default:
//             return state;
//     }
// }