'use server'

import { PHOTO_GET } from '@/functions/api'
import { apiError } from '@/functions/api-error'
import { PhotoData } from '@/types'

export default async function photoGet(id: string) {
  try {
    const { url } = PHOTO_GET(id)
    const response = await fetch(url, {
      next: {
        revalidate: 60,
        tags: ['photo', 'comment'],
      },
    })
    if (!response.ok) throw new Error('Erro ao carregar a foto.')
    const data = (await response.json()) as PhotoData

    return { data, ok: true, error: '' }
  } catch (error) {
    return apiError(error)
  }
}
