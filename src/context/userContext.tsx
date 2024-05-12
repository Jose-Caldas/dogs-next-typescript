'use client'

import logout from '@/actions/logout'
import validateToken from '@/actions/validate-token'
import { User } from '@/types'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
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

  useEffect(() => {
    async function validate() {
      const { ok } = await validateToken()
      if (!ok) await logout()
    }
    if (userState) validate()
  }, [userState])

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
