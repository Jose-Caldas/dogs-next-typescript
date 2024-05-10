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

export type PhotosGetParams = {
  page?: number
  total?: number
  user?: 0 | string
}

export type Comment = {
  comment_ID: string
  comment_post_ID: string
  comment_author: string
  comment_content: string
}

export type PhotoData = {
  photo: Photo
  comments: Comment[]
}
