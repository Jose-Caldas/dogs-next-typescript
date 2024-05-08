'use client'

import { useUser } from '@/context/userContext'

export default function ContaPage() {
  const { user } = useUser()

  return (
    <section className="animeLeft">
      <h1>Conta: {user?.nome}</h1>
    </section>
  )
}
