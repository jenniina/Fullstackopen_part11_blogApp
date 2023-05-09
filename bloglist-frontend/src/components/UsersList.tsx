import { useEffect } from 'react'
import { reducerProps } from '../interfaces'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { notify } from '../reducers/notificationReducer'
import { useSelector } from 'react-redux'
import { AxiosError } from 'axios'
import { initializeUsers } from '../reducers/usersReducer'
import { Link } from 'react-router-dom'

const UsersList = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeUsers()).catch((error) => {
      dispatch(
        notify(
          `Error: ${(error as AxiosError<any>).response?.data.error} - ${
            (error as Error).message
          }`,
          true,
          10,
        ),
      )
    })
  }, [])

  const users = useSelector((state: reducerProps) => {
    return state.users
  })

  const loggedIn = useSelector((state: reducerProps) => {
    return state.auth
  })

  if (!loggedIn) return <div>Please log in</div>

  return (
    <>
      <h2>Users</h2>
      <table className="users-list">
        <tbody>
          <tr>
            <th>User</th>
            <th>Blogs</th>
          </tr>
          {[...users]
            .sort((a, b) => b.blogs.length - a.blogs.length)
            .map((user) => (
              <tr key={user.id}>
                <td>
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
                </td>
                <td>{user.blogs.length}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default UsersList
