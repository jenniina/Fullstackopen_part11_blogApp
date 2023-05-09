import { FormEvent, useState, useEffect, useRef } from 'react'
import { user, reducerProps } from '../interfaces'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { notify } from '../reducers/notificationReducer'
import { createBlog } from '../reducers/blogReducer'
import { initializeUsers } from '../reducers/usersReducer'
import { initializeBlogs } from '../reducers/blogReducer'
import { useSelector } from 'react-redux'
import Accordion from './Accordion'
import { useNavigate } from 'react-router-dom'

const FormBlog = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const user = useSelector((state: reducerProps) => {
    return state.auth
  })
  const formBlogRef = useRef<any>(null)

  useEffect(() => {
    dispatch(initializeUsers())
  }, [])

  const users = useSelector((state: reducerProps) => {
    return state.users
  })

  const currentUser = users.find((u: user) => u.username === user?.username)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addBlog = async (event: FormEvent) => {
    event.preventDefault()

    await dispatch(
      createBlog({
        title: title,
        author: author,
        url: url,
        likes: 0,
        user: currentUser?.id,
      }),
    )
      .then(() => {
        dispatch(notify(`You added a new blog: ${title}`, false, 6))
        dispatch(initializeBlogs())
        formBlogRef.current?.toggleVisibility()
      })
      .then(() => {
        navigate('/')
      })
      .catch((error) =>
        dispatch(notify(`${(error as Error).message}`, true, 10)),
      )

    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div className="accordion-wrapper">
      <Accordion className="right" text="Add a blog" ref={formBlogRef}>
        <h2>Add a new Blog</h2>

        <form onSubmit={addBlog}>
          <label>
            <span>Title: </span>
            <input
              className="input-title"
              value={title}
              name="title"
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Title"
            />
          </label>
          <label>
            <span>Author: </span>
            <input
              value={author}
              name="author"
              onChange={(event) => setAuthor(event.target.value)}
              placeholder="Author"
            />
          </label>
          <label>
            <span>Web address: </span>
            <input
              value={url}
              name="url"
              onChange={(event) => setUrl(event.target.value)}
              placeholder="https://jenniina.fi"
            />
          </label>
          <input name="user" type="hidden" defaultValue={currentUser?.id} />
          <button type="submit">save</button>
        </form>
      </Accordion>
    </div>
  )
}

export default FormBlog
