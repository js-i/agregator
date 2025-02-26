
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, createSelector} from "@reduxjs/toolkit";
import { usersSlice, initialUsersList } from "../components/modules/users/users.slice";
import { countersReducer } from "../components/modules/counters/counters.slice";


export const store = configureStore({
    reducer: {
        counters: countersReducer,
        [usersSlice.name]: usersSlice.reducer
    }
})

store.dispatch(usersSlice.actions.store({ users: initialUsersList}));

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const createAppSelector = createSelector.withTypes<AppState>()



// const reducer = combineReducers({
    //     users: usersReducer,
    //     counters: countersReducer
    // })

// export const useAppStore = useStore.withTypes<typeof store>()


// Хук для получения конкретного счетчика
// export const useCounter = (counterId: CounterId) => {
//     return useAppSelector((state) => state.counters[counterId] ?? { counter: 0 });
// };

// export type State = {
//     counters: CountersState,
//     users: UserState
// };