import photosGet from '@/actions/photos-get'
import Feed from '@/components/feed'

export default async function Home() {
  const photos = await photosGet()

  return (
    <section className="container mainContainer">
      <Feed photos={photos} />
    </section>
  )
}
