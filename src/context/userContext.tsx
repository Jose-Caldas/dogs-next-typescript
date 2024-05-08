'use client'

import { User } from '@/types'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

export type IUserContext = {
  user: User | null
  setUserState: Dispatch<SetStateAction<User | null>>
}

export const UserContext = createContext<IUserContext | null>(null)

type ContextProps = {
  children: ReactNode
  user: User | null
}

export function UserContextProvider({ children, user }: ContextProps) {
  const [userState, setUserState] = useState(user)
  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (context === null)
    throw new Error('UseContext deve estar dentro do Provider.')

  return context
}
