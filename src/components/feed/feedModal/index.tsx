'use client'

import { PhotoData } from '@/types'
import PhotoContent from '../../photo/PhotoContent'
import { useRouter, usePathname } from 'next/navigation'
import styles from './FeedModal.module.css'

export default function FeedModal({ photo }: { photo: PhotoData }) {
  const router = useRouter()
  const pathname = usePathname()

  if (!pathname.includes('foto')) {
    return null
  }

  function handleOutsideClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) router.back()
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <PhotoContent data={photo} single={false} />
    </div>
  )
}
