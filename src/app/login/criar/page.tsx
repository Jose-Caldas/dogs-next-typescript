import LoginCriarForm from '@/components/login/LoginCriarForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dogs | Crie sua conta',
  description: 'Criar sua conta no site Dogs',
}

function handleSubmit() {}

export default async function LoginCriarPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <LoginCriarForm />
    </div>
  )
}
