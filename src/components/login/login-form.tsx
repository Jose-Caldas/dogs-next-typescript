'use client'

import login from '@/actions/login'
import { useFormState, useFormStatus } from 'react-dom'
import Button from '@/components/forms/Button'
import Input from '@/components/forms/Input'
import ErrorMessage from '../helper/ErrorMessage'
import React from 'react'

function FormButton() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  )
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  })

  React.useEffect(() => {
    if (state.ok) window.location.href = '/conta'
  }, [state.ok])

  return (
    <>
      <form action={action}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <FormButton />
        <ErrorMessage errorMessage={state.error} />
      </form>
    </>
  )
}
