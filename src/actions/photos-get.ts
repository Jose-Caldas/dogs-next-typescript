'use server'

import { Photo } from '@/types'

export default async function photosGet() {
  const response = await fetch('https://dogsapi.origamid.dev/json/api/photo')
  const photos = (await response.json()) as Photo[]

  return photos
}
