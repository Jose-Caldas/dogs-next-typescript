import { notFound } from 'next/navigation'
import photoGet from '@/actions/photo.get'
import FeedModal from '@/components/feed/feedModal'

type PhotoIdParams = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PhotoIdParams) {
  const { data } = await photoGet(params.id)
  if (!data) return { title: 'Fotos' }

  return {
    title: `Dogs | ${data.photo.title} `,
  }
}

export default async function FotoIdPage({ params }: PhotoIdParams) {
  const { data } = await photoGet(params.id)

  if (!data) return notFound()

  return <FeedModal photo={data} />
}
