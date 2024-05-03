import styles from './Login.module.css'

type Props = {
  children: React.ReactNode
}

export default async function LoginLayout({ children }: Props) {
  return (
    <div className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </div>
  )
}
