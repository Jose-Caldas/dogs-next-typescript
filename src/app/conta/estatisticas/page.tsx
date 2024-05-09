import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dogs | Estatísticas',
  description: 'Estatísticas de acessos ás fotos postadas.',
}

export default function EstatisticasPage() {
  return (
    <section className="animeLeft">
      <h1>Estatísticas</h1>
    </section>
  )
}
