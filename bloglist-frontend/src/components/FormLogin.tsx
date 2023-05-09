import { useEffect, useRef, useState, FormEvent } from 'react'
import { AxiosError } from 'axios'
import { reducerProps } from '../interfaces'
import Accordion from './Accordion'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { notify } from '../reducers/notificationReducer'
import { initializeUser, login, logout } from '../reducers/authReducer'
import { useSelector } from 'react-redux'

const FormLogin = () => {
  const dispatch = useAppDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const formLoginRef = useRef(null)

  const user = useSelector((state: reducerProps) => {
    return state.auth
  })

  useEffect(() => {
    dispatch(initializeUser())
  }, [])

  const handleLogout = () => {
    dispatch(logout())
  }

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault()
    dispatch(notify(`Logging in...`, true, 8))

    await dispatch(login(username, password))
      .then(() => {
        setUsername('')
        setPassword('')
      })
      .catch((e) =>
        dispatch(
          notify(
            `Error: ${(e as AxiosError<any>).response?.data.error}`,
            true,
            8,
          ),
        ),
      )
  }

  return (
    <div>
      {user ? (
        <p>
          {user?.name} is logged in{' '}
          <button onClick={handleLogout}>
            <small>Logout</small>
          </button>
        </p>
      ) : (
        <>
          <Accordion className="" text="login" ref={formLoginRef}>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
              <label>
                <span>username: </span>
                <input
                  name="username"
                  value={username}
                  placeholder="username"
                  onChange={({ target }) => setUsername(target.value)}
                />
              </label>
              <label>
                <span>password: </span>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
              </label>
              <button type="submit">login</button>
            </form>
          </Accordion>
        </>
      )}
    </div>
  )
}

export default FormLogin
