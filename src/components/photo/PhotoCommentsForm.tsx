'use client'
import { useFormState, useFormStatus } from 'react-dom'

import styles from './PhotoCommentsForm.module.css'
import EnviarIcon from '@/icons/EnviarIcon'
import commentPost from '@/actions/comment-post'
import { Comment } from '@/types'
import ErrorMessage from '../helper/ErrorMessage'
import { useEffect, useState } from 'react'

function FormButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className={styles.button} disabled={pending}>
      <EnviarIcon />
    </button>
  )
}

type PhotoCommentsFormProps = {
  single: boolean
  id: number
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>
}

export default function PhotoCommentsForm({
  single,
  id,
  setAllComments,
}: PhotoCommentsFormProps) {
  const [state, action] = useFormState(commentPost, {
    ok: false,
    data: null,
    error: '',
  })

  const [comment, setComment] = useState('')

  useEffect(() => {
    if (state.ok && state.data) {
      setAllComments((comments) => [...comments, state.data])
      setComment('')
    }
  }, [state, setAllComments])

  return (
    <form
      action={action}
      className={`${styles.form} ${single ? styles.single : ''}`}
    >
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <FormButton />
      <ErrorMessage errorMessage={state.error} />
    </form>
  )
}
