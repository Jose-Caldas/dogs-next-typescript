'use client'
import { useEffect, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

import Button from '@/components/forms/Button'
import Input from '@/components/forms/Input'
import ErrorMessage from '@/components/helper/ErrorMessage'
import passwordLost from '@/actions/password-lost'
import styles from './LoginForm.module.css'

function FormButton() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Enviar Email</Button>
      )}
    </>
  )
}

export default function LoginCriarForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: '',
    data: null,
  })

  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href.replace('perdeu', 'resetar'))
  }, [])

  return (
    <>
      <form className={styles.forms} action={action}>
        <Input label="Email / Usuário" type="email" name="login" />
        <input type="hidden" name="url" value={url} />
        <ErrorMessage errorMessage={state.error} />

        {state.ok ? (
          <p style={{ color: '#4c1', marginTop: '1rem' }}>Email enviado.</p>
        ) : (
          <FormButton />
        )}
      </form>
    </>
  )
}
