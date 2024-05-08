import ContaHeader from '@/components/conta/ContaHeader'

type LayoutProps = {
  children: React.ReactNode
}

export default function ContaLayout({ children }: LayoutProps) {
  return (
    <div className="container">
      <ContaHeader />
      {children}
    </div>
  )
}
