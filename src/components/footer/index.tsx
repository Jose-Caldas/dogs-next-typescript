import Image from 'next/image'
import styles from './Footer.module.css'

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={'/assets/dogs-footer.svg'}
        width={28}
        height={22}
        alt="Dogs - logo"
        priority
      />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}
