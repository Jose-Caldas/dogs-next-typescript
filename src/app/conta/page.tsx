import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dogs | Minhas Fotos',
  description: 'Página minha conta e fotos',
}

export default async function ContaPage() {
  return (
    <section className="animeLeft">
      <h1>Nenhuma foto ainda adicionada!</h1>
    </section>
  )
}
