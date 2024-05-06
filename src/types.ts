export type Photo = {
  id: number
  author: string
  title: string
  date: string
  src: string
  peso: string
  idade: string
  acessos: string
  total_comments: string
}

export type Photos = {
  photos: Photo[]
}

export type User = {
  id: number
  nome: string
  username: string
  email: string
}
