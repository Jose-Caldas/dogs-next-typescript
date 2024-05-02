type PageParams = {
  params: {
    user: string
  }
}

export default async function PerfilUserPage({ params }: PageParams) {
  return (
    <main>
      <h1 className="title">Página Usuário</h1>
      <h2>Usuário: {params.user}</h2>
    </main>
  )
}
