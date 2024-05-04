import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonType = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...props }: ButtonType) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
