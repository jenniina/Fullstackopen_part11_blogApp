import { user, reducerProps } from '../interfaces'
import { useSelector } from 'react-redux'

type userProps = {
  user: user | null | undefined
}
const User = ({ user }: userProps) => {
  const loggedIn = useSelector((state: reducerProps) => {
    return state.auth
  })

  const users = useSelector((state: reducerProps) => {
    return state.users
  })

  const currentUser = users.find((u: user) => u.username === user?.username)

  const currentUserBlogs = currentUser?.blogs

  const currentUserBlogsLength: number | undefined = currentUserBlogs?.length
  if (!user) return <div>Please log in</div>
  if (!loggedIn) return <div>Please log in</div>

  return (
    <div className="user-wrap">
      <h2>{currentUser?.name}</h2>
      <h3>Blogs</h3>
      <ul>
        {currentUserBlogsLength === 0 ? (
          <li>No blogs yet!</li>
        ) : (
          currentUserBlogs?.map((blog) => {
            return (
              <li key={blog.id}>
                <a href={`/blogs/${blog.id}`}>{blog.title}</a>{' '}
                <em>by {blog.author} </em>
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}

export default User
