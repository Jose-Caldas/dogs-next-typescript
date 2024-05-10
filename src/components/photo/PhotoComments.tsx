'use client'

import { useEffect, useRef, useState } from 'react'

import PhotoCommentsForm from './PhotoCommentsForm'
import { useUser } from '@/context/userContext'
import { Comment } from '@/types'

import styles from './photoComments.module.css'

type PhotoCommentsProps = {
  single: boolean
  id: number
  comments: Comment[]
}

export default function PhotoComments({
  single,
  id,
  comments,
}: PhotoCommentsProps) {
  const [allComments, setAllComments] = useState(() => comments)
  const commentsSection = useRef<HTMLUListElement>(null)
  const { user } = useUser()

  useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight
    }
  }, [allComments])

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ''}`}
      >
        {allComments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {user && (
        <PhotoCommentsForm
          single={single}
          id={id}
          setAllComments={setAllComments}
        />
      )}
    </>
  )
}
