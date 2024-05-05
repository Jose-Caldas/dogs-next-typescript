import LoginForm from '@/components/login/LoginForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dogs | Login',
  description: 'Logue na sua conta no site Dogs',
}

export default async function LoginPage() {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </section>
  )
}
