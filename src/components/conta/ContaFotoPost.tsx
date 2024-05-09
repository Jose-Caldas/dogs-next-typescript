'use client'

import { ChangeEvent, useState } from 'react'
import Button from '../forms/Button'
import Input from '../forms/Input'
import ErrorMessage from '../helper/ErrorMessage'
import { useFormState, useFormStatus } from 'react-dom'
import styles from './ContaFotoPost.module.css'
import photoPost from '@/actions/photo-post'

function FormButton() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Enviar</Button>
      )}
    </>
  )
}

export default function ContaFotoPost() {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: '',
    data: null,
  })

  const [img, setImg] = useState('')

  function handleImgChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]))
      URL.createObjectURL(target.files[0])
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action}>
        <Input label="Nome" type="text" name="nome" />
        <Input label="Peso" type="number" name="peso" />
        <Input label="Idade" type="number" name="idade" />

        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />

        <FormButton />
        <ErrorMessage errorMessage={state.error} />
      </form>

      <div>
        {img && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
        )}
      </div>
    </section>
  )
}
