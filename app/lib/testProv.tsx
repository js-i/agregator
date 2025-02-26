'use client'
import { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { newsStore, fetchNews } from './newsStore'

// export const ProviderStore = ({children}: {children: ReactNode}) => {
//     return <Provider store={store}>{children}</Provider>;
// }
// export default ProviderStore

export const ProviderNewsStore = ({children}: {children: ReactNode}) => {
    useEffect(() => {
        newsStore.dispatch(fetchNews())
    }, [])
    return <Provider store={newsStore}>{children}</Provider>;
}

export default ProviderNewsStore
