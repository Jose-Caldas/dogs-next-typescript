type PageParams = {
  params: {
    id: number
  }
}

export default function FotoIdPage({ params }: PageParams) {
  return (
    <main>
      <h1>Foto {params.id}</h1>
    </main>
  )
}
