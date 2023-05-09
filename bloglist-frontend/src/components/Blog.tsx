import { useRef } from 'react'
import { user, blog, blogMongo } from '../interfaces'
import Accordion from './Accordion'
import { useAppDispatch } from '../hooks/useAppDispatch'
import blogService from '../services/blogs'
import { notify } from '../reducers/notificationReducer'
import {
  initializeBlogs,
  removeBlog,
  updateBlogLikes,
} from '../reducers/blogReducer'
import { Link } from 'react-router-dom'

interface BlogProps {
  blog: blog | undefined | null
  user: user | undefined | null
}

const Blog = (props: BlogProps) => {
  const dispatch = useAppDispatch()

  const viewBlog = useRef()

  const handleLikes = async (blogObject: blog | undefined | null) => {
    const mongoSanitation = {
      ...blogObject,
      user: blogObject?.user?.id,
      comments: blogObject?.comments?.map((commentObject) => {
        return commentObject?.id
      }),
    }
    mongoSanitation.likes
      ? (mongoSanitation.likes += 1)
      : (mongoSanitation.likes = 1)

    await blogService
      .update(mongoSanitation as blogMongo)
      .then(() => dispatch(updateBlogLikes(mongoSanitation as blogMongo)))
      .then(() => {
        dispatch(notify(`Liked ${blogObject?.title}`, false, 5))
        dispatch(initializeBlogs())
      })
      .catch((error) => {
        dispatch(
          notify(
            `Error liking "${blogObject?.title}": ${(error as Error).message}`,
            true,
            10,
          ),
        )
      })
  }

  const deleteBlog = async (BlogToDelete: blog | undefined | null) => {
    if (window.confirm(`Delete ${BlogToDelete?.title} ?`)) {
      dispatch(removeBlog(BlogToDelete?.id))
        .then(() => {
          dispatch(notify(`The blog was deleted`, false, 5))
          dispatch(initializeBlogs())
        })
        .catch((e) =>
          dispatch(notify(`Error: ${(e as Error).message}`, true, 10)),
        )
    }
  }

  return (
    <li className="blog-wrap">
      <span>
        <strong>
          <Link to={`blogs/${props.blog?.id}`}>{props.blog?.title}</Link>,{' '}
        </strong>
      </span>
      <span>
        <em>{props.blog?.author} </em>
      </span>
      <Accordion className="" text="view" ref={viewBlog}>
        <p>
          <a href={props.blog?.url}>
            <small>{props.blog?.url} </small>
          </a>
        </p>
        <p>
          Likes: <strong>{props.blog?.likes} </strong>
          <button className="like" onClick={() => handleLikes(props.blog)}>
            <small>like</small>
          </button>
        </p>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {props.user?.username === props.blog?.user?.username ? (
            <button onClick={() => deleteBlog(props.blog)}>Delete</button>
          ) : (
            ''
          )}
          <Link to={`blogs/${props.blog?.id}`}>See more...</Link>
        </div>
      </Accordion>
    </li>
  )
}

export default Blog
