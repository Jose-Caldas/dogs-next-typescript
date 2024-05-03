import Image from 'next/image'
import FeedFotos from './feedPhotos'
import { Photos } from '@/types'

export default async function Feed({ photos }: Photos) {
  return (
    <section>
      <div>
        <FeedFotos photos={photos} />
      </div>
    </section>
  )
}
