'use client'
import { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

import Button from '@/components/forms/Button'
import Input from '@/components/forms/Input'
import ErrorMessage from '@/components/helper/ErrorMessage'
import login from '@/actions/login'
import styles from './LoginForm.module.css'
import userPost from '@/actions/user-post'

function FormButton() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Cadastrando...</Button>
      ) : (
        <Button>Cadastrar</Button>
      )}
    </>
  )
}

export default function LoginCriarForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: '',
    data: null,
  })

  useEffect(() => {
    if (state.ok) window.location.href = '/conta'
  }, [state.ok])

  return (
    <>
      <form className={styles.forms} action={action}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="E-mail" type="email" name="email" />
        <Input label="Senha" type="password" name="password" />
        <FormButton />
        <ErrorMessage errorMessage={state.error} />
      </form>
    </>
  )
}
