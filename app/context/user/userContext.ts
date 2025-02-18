import { createContext } from "react";
import { User } from './provider'

interface UserContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);
