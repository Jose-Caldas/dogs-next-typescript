'use client'

import styles from './Login-form.module.css'

import login from '@/actions/login'
import { useFormState, useFormStatus } from 'react-dom'
import Button from '@/components/forms/Button'
import Input from '@/components/forms/Input'
import ErrorMessage from '../helper/ErrorMessage'
import React from 'react'
import Link from 'next/link'

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
      <form className={styles.forms} action={action}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <FormButton />
        <ErrorMessage errorMessage={state.error} />
      </form>
      <Link href="/login/perdeu" className={styles.perdeu}>
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link href="/login/criar" className="button">
          Cadastro
        </Link>
      </div>
    </>
  )
}
