'use client'

import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'

import passwordReset from '@/actions/password-reset'
import Button from '@/components/forms/Button'
import Input from '@/components/forms/Input'
import ErrorMessage from '@/components/helper/ErrorMessage'
import styles from './LoginForm.module.css'

function FormButton() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Resetando...</Button>
      ) : (
        <Button>Resetar Senha</Button>
      )}
    </>
  )
}

export default function LoginResetarForm({
  keyToken,
  login,
}: {
  login: string
  keyToken: string
}) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: '',
    data: null,
  })

  return (
    <form action={action} className={styles.form}>
      <Input label="Nova Senha" name="password" type="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <ErrorMessage errorMessage={state.error} />
      <FormButton />
    </form>
  )
}
