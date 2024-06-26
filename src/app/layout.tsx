import type { Metadata } from 'next'
import { type_second } from '@/functions/fonts'

import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { UserContextProvider } from '@/context/userContext'
import userGet from '@/actions/user-get'

export const metadata: Metadata = {
  title: 'Dogs | Home',
  description: 'Rede social para cachorros.',
}

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  const { data: user } = await userGet()

  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <UserContextProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppMain">{children}</main>
            <div>{modal}</div>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  )
}
