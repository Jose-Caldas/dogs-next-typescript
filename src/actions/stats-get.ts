'use server'

import { STATS_GET } from '@/functions/api'
import { apiError } from '@/functions/api-error'
import { StatsData } from '@/types'
import { cookies } from 'next/headers'

export default async function statsGet() {
  try {
    const token = cookies().get('token')?.value
    if (!token) throw new Error('Acesso negado.')

    const { url } = STATS_GET()
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60,
      },
    })

    if (!response.ok) throw new Error('Erro ao carregar as estatísticas.')
    const data = (await response.json()) as StatsData[]

    return { data, ok: true, error: '' }
  } catch (error) {
    return apiError(error)
  }
}
