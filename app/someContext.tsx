import { createContext } from 'react'

export const SomeContext = createContext({})

export default function ThemeProvider({children} : { children: React.ReactNode}) {
    return <SomeContext.Provider value='dark'>{children}</SomeContext.Provider>
}