'use client'
import { useFormState, useFormStatus } from 'react-dom'

import Button from '@/components/forms/Button'
import Input from '@/components/forms/Input'
import ErrorMessage from '@/components/helper/ErrorMessage'
import styles from './LoginForm.module.css'
import passwordLost from '@/actions/password-lost'

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

  return (
    <>
      <form className={styles.forms} action={action}>
        <Input label="Email / Usuário" type="email" name="login" />
        <input
          type="hidden"
          name="url"
          value={`${window.location.href.replace('perdeu', 'resetar')}`}
        />
        <FormButton />
        {state.ok ? (
          <p style={{ color: '#4c1', marginTop: '1rem' }}>Email enviado.</p>
        ) : (
          <ErrorMessage errorMessage={state.error} />
        )}
      </form>
    </>
  )
}
