'use client'

import { useUser } from '@/context/userContext'

export default function ContaPage() {
  const { user } = useUser()

  return (
    <section className="container mainContainer">
      <h1 className="title">Página Conta: {user?.nome}</h1>
    </section>
  )
}
