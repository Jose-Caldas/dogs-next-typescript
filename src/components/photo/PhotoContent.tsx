'use client'

import Image from 'next/image'
import styles from './PhotoContent.module.css'
import PhotoDelete from './PhotoDelete'
import { useUser } from '@/context/userContext'
import Link from 'next/link'
import { PhotoData } from '@/types'
import PhotoComments from './PhotoComments'

type PhotoContentProps = {
  data: PhotoData
  single: boolean
}

const PhotoContent = ({ data, single }: PhotoContentProps) => {
  const { user } = useUser()
  const { photo, comments } = data

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image
          src={photo.src}
          alt={photo.title}
          width={1000}
          height={1000}
          priority
        />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user && user?.username === photo.author ? (
              <PhotoDelete id={String(photo.id)} />
            ) : (
              <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link href={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  )
}

export default PhotoContent
