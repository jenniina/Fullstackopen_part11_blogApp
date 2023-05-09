import { useEffect } from 'react'
import Blog from '../components/Blog'
import { user, reducerProps } from '../interfaces'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { notify } from '../reducers/notificationReducer'
import { useSelector } from 'react-redux'
import { initializeBlogs } from '../reducers/blogReducer'
import { Axios, AxiosError } from 'axios'

const BlogList = () => {
  const dispatch = useAppDispatch()

  const user = useSelector((state: reducerProps) => {
    return state.auth
  })

  const blogs = useSelector((state: reducerProps) => {
    return state.blogs
  })

  const users = useSelector((state: reducerProps) => {
    return state.users
  })

  const currentUser = users.find((u: user) => u.username === user?.username)

  const likesSum = blogs
    .map((blog) => {
      return blog?.likes
    })
    .reduce((a, b) => Number(a) + Number(b), 0)

  useEffect(() => {
    dispatch(initializeBlogs()).catch((error) => {
      dispatch(
        notify(
          `Error: ${(error as AxiosError<any>).response?.data.error}`,
          true,
          10,
        ),
      )
    })
  }, [likesSum])

  return (
    <>
      <h2>Blogs</h2>
      <ul className="blog-list">
        {[...blogs]
          .sort((a, b) => b.likes - a.likes)
          .map((blog) => (
            <Blog key={blog?.id} blog={blog} user={currentUser} />
          ))}
      </ul>
    </>
  )
}

export default BlogList
