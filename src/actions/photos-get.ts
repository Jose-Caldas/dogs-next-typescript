'use server'

import { Photo } from '@/types'

export default async function photosGet() {
  const response = await fetch('https://dogsapi.origamid.dev/json/api/photo', {
    next: { revalidate: 10, tags: ['photos'] },
  })
  const photos = (await response.json()) as Photo[]

  return photos
}
