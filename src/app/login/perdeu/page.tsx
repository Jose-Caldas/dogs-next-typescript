import { Metadata } from 'next'
import LoginPerdeuForm from '@/components/login/LoginPerdeuForm'

export const metadata: Metadata = {
  title: 'Dogs | Perdeu a senha',
  description: 'Recupere a sua senha',
}

export default async function PerdeuPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <LoginPerdeuForm />
    </div>
  )
}
