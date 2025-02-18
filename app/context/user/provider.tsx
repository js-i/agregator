'use client'
import React, { useMemo, useState,  ReactNode } from "react";
import { UserContext } from "./userContext";

export interface User {
    name: string;
}

export function UserContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const contextValue = useMemo(() => ({
        user,
        login: (user: User) => setUser(user),
        logout: () => setUser(null)
    }), [user]);

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}


