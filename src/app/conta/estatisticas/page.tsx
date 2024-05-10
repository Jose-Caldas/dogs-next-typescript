import statsGet from '@/actions/stats-get'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const ContaEstatisticas = dynamic(
  () => import('@/components/conta/ContaEstatisticas'),
  {
    loading: () => <p>Carrgando...</p>,
    ssr: false,
  }
)

export const metadata: Metadata = {
  title: 'Dogs | Estatísticas',
  description: 'Estatísticas de acessos ás fotos postadas.',
}

export default async function EstatisticasPage() {
  const { data } = await statsGet()

  if (!data) return null

  return (
    <section className="animeLeft">
      <ContaEstatisticas data={data} />
    </section>
  )
}
