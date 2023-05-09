import { FormEvent, useState, useEffect, useRef } from 'react'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { notify } from '../reducers/notificationReducer'
import { addComment } from '../reducers/blogReducer'
import { initializeUsers } from '../reducers/usersReducer'
import { initializeBlogs } from '../reducers/blogReducer'
import Accordion from './Accordion'
import { AxiosError } from 'axios'

const FormComment = ({ id }: { id: string | undefined }) => {
  const dispatch = useAppDispatch()

  const formCommentRef = useRef<any>(null)

  useEffect(() => {
    dispatch(initializeUsers())
  }, [])

  const [comment, setComment] = useState('')
  const [username, setUsername] = useState('')

  const commentHandler = async (event: FormEvent) => {
    event.preventDefault()

    await dispatch(addComment({ id }, comment, username))
      .then(() => {
        dispatch(notify(`You added a new comment: ${comment}`, false, 6))
        dispatch(initializeBlogs())
        formCommentRef.current?.toggleVisibility()
      })
      .then(() => {
        setComment('')
        setUsername('')
      })
      .catch((e) =>
        dispatch(
          notify(
            `Error: ${(e as AxiosError<any>).response?.data.error}`,
            true,
            10,
          ),
        ),
      )
  }

  return (
    <div className="accordion-wrapper">
      <Accordion className="right" text="Add a comment" ref={formCommentRef}>
        <h4>Add a new comment</h4>

        <form onSubmit={commentHandler} className="comment">
          <label>
            <span>Comment: </span>
            <textarea
              className="input-comment"
              value={comment}
              name="comment"
              onChange={(event) => setComment(event.target.value)}
              placeholder="Comment here"
            />
          </label>
          <label>
            <span>Username: </span>
            <input
              value={username}
              name="username"
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Please give a username"
            />
          </label>

          <button type="submit">save</button>
        </form>
      </Accordion>
    </div>
  )
}

export default FormComment
