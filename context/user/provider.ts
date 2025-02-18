'use client'
import React, { useMemo, useState, createContext, useContext, ReactNode } from "react";

// Интерфейс для пользователя
interface User {
    name: string;
}

// Интерфейс для контекста
interface UserContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const contextValue = useMemo(() => ({
        user,
        login: (user: User) => setUser(user),
        logout: () => setUser(null)
    }), [user]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUserContext must be used within a UserContextProvider");
    }
    return context;
};
