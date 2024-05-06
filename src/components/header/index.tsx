import Link from 'next/link'
import styles from './Header.module.css'
import Image from 'next/image'
import userGet from '@/actions/user-get'

export default async function Header() {
  const { data } = await userGet()

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
        {data ? (
          <Link className={styles.login} href={'/conta'}>
            {data.username}
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
