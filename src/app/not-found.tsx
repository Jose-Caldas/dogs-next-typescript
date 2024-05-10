import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="container">
      <h1 className="title">Página não encontrada</h1>
      <Link className="button" href="/" style={{ display: 'inline-block' }}>
        Voltar para a Home
      </Link>
    </section>
  )
}
