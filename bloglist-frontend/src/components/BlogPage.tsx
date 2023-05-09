import { useEffect } from 'react'
import { blog, blogMongo, reducerProps } from '../interfaces'
import { useAppDispatch } from '../hooks/useAppDispatch'
import blogService from '../services/blogs'
import { notify } from '../reducers/notificationReducer'
import {
  initializeBlogs,
  removeBlog,
  updateBlogLikes,
} from '../reducers/blogReducer'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AxiosError } from 'axios'
import Comments from './Comments'

const BlogSingle = () => {
  const navigate = useNavigate()

  const where = useLocation()
  const blogId = where.pathname.substring(where.pathname.lastIndexOf('/') + 1)

  const blogs = useSelector((state: reducerProps) => {
    return state.blogs
  })

  const user = useSelector((state: reducerProps) => {
    return state.auth
  })

  const currentBlog = blogs.find((b: blog) => b?.id === blogId)

  const dispatch = useAppDispatch()

  const handleLikes = async (blogObject: blog | undefined | null) => {
    const mongoSanitation = {
      ...blogObject,
      user: blogObject?.user?.id,
      comments: blogObject?.comments?.map((comment) => {
        return comment?.id
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

  const deleteBlog = async (BlogToDelete: blog) => {
    if (window.confirm(`Delete ${BlogToDelete?.title} ?`)) {
      dispatch(removeBlog(BlogToDelete?.id))
        .then(() => {
          dispatch(notify(`The blog was deleted`, false, 5))
          dispatch(initializeBlogs())
        })
        .then(() => {
          navigate('/')
        })
        .catch((e) =>
          dispatch(notify(`Error: ${(e as Error).message}`, true, 10)),
        )
    }
  }

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
  }, [where])

  return (
    <>
      <Link to="/">back to blog list</Link>
      <div className="blog-wrap">
        <h2>{currentBlog?.title}</h2>
        <p>
          <big>
            <em>by {currentBlog?.author} </em>
          </big>
        </p>

        <p>
          <a href={currentBlog?.url}>More information </a>
        </p>
        <p>
          Likes: {currentBlog?.likes}
          <button className="like" onClick={() => handleLikes(currentBlog)}>
            <small>like</small>
          </button>
        </p>
        {currentBlog?.user?.name ? (
          <p>
            <small>
              Added by <em>{currentBlog?.user?.name}</em>{' '}
            </small>
          </p>
        ) : (
          ''
        )}
        {user?.username === currentBlog?.user?.username ? (
          <button onClick={() => deleteBlog(currentBlog)}>Delete</button>
        ) : (
          ''
        )}
      </div>
      {currentBlog ? <Comments blog={currentBlog} /> : ''}
    </>
  )
}

export default BlogSingle
