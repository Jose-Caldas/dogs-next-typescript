import Link from 'next/link'
import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
  const user = true // todo logic to user is Logged

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link
          className={styles.logo}
          href={'/'}
          aria-label="Dogs - Home"
          title="Go to home"
        >
          <Image
            src={'/assets/dogs.svg'}
            width={28}
            height={22}
            alt="Dogs - logo"
            priority
          />
        </Link>
        {user ? (
          <Link className={styles.login} href={'/conta'}>
            Dogs
          </Link>
        ) : (
          <Link className={styles.login} href={'/login'}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  )
}
