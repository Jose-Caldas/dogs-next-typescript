'use client'

import React, { useState } from 'react'
import photoDelete from '@/actions/photo-delete'
import styles from './PhotoDelete.module.css'

export default function PhotoDelete({ id }: { id: string }) {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    const confirm = window.confirm('Tem certeza que deseja deletar essa foto?')
    if (confirm) {
      await photoDelete(id)
    }
    setLoading(false)
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletando...
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  )
}
