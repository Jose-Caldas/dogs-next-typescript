import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonType = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...props }: ButtonType) => {
  return (
    <button {...props} className="button">
      {children}
    </button>
  )
}

export default Button
