export type blog = {
  title: string
  author: string
  url: string
  likes: number
  user?: { id: string; username: string; name: string }
  id?: string
  comments?: commentProps[]
}

export type blogMongo = {
  title: string
  author: string
  url: string
  likes: number
  user?: string
  id?: string
}

export type commentProps = {
  comment: string
  username: string
  id?: string
}

export type user = {
  username: string
  name: string
  password: string
  id: string
  blogs: [
    {
      id: string
      author: string
      title: string
      url: string
    },
  ]
}

export type reducerProps = {
  notification: {
    isError: boolean
    message: string
    seconds: number
  }
  blogs: blog[]
  users: user[]
  auth: user
}
