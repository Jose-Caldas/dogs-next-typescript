import ContaFotoPost from '@/components/conta/ContaFotoPost'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dogs | Postar foto',
  description: 'Fazer a postagem de uma nova foto.',
}

export const runtime = 'edge'

export default function PostarPage() {
  return (
    <section className="animeLeft">
      <ContaFotoPost />
    </section>
  )
}
