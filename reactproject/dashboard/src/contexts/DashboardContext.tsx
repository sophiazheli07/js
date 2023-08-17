import React,  { Dispatch, createContext, useState, FC, PropsWithChildren } from 'react';
import { Dashboard } from '../components/static/Dashboard';

interface DashboardContextInterface {
    user: {
        email: ReactNode;
        user: UserInterface | null,
        setUser: Dispatch<UserInterface | null>
    }
}

export const DashboardContext = createContext<DashboardContextInterface | null>(null);

export const DashboardContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [user, setUser] = useState<UserInterface | null>(null)
  return (
    <DashboardContext.Provider value=({user, setUser})>
        {children}
    </DashboardContext.Provider>
  )
}
