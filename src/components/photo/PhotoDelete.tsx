import React from 'react'
import styles from './PhotoDelete.module.css'

const PhotoDelete = ({ id }: { id: string }) => {
  return (
    <>
      <button className={styles.delete}>Deletar: {id}</button>
    </>
  )
}

export default PhotoDelete
