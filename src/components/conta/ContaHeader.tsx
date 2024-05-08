'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import useMedia from '@/hooks/useMedia'
import AdicionarIcon from '@/icons/AdicionarIcon'
import EstatisticasIcon from '@/icons/EstatisticasIcon'
import FeeIcon from '@/icons/FeedIcon'
import SairIcon from '@/icons/SairIcon'

import styles from './ContaHeader.module.css'

function getTitle(pathname: string) {
  switch (pathname) {
    case '/conta/postar':
      return 'Postar Foto'

    case '/conta/estatisticas':
      return 'Estatísticas'

    default:
      return 'Minhas Fotos'
  }
}

export default function ContaHeader() {
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const pathname = usePathname()
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link
          href="/conta"
          title="Minhas Fotos"
          className={pathname === '/conta' ? 'active' : ''}
        >
          <FeeIcon />
          {mobile && 'Minhas Fotos'}
        </Link>
        <Link
          href="/conta/estatisticas"
          title="Ver Estatísticas"
          className={pathname === '/conta/estatisticas' ? 'active' : ''}
        >
          <EstatisticasIcon />
          {mobile && 'Estatísticas'}
        </Link>
        <Link
          href="/conta/postar"
          title="Postar Foto"
          className={pathname === '/conta/postar' ? 'active' : ''}
        >
          <AdicionarIcon />
          {mobile && 'Adicionar Foto'}
        </Link>
        <button onClick={() => {}} title="Sair">
          <SairIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </header>
  )
}
