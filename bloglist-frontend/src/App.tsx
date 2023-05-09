import FormLogin from './components/FormLogin'
import Notification from './components/Notification'
import FormBlog from './components/FormBlog'
import BlogList from './components/BlogList'
import { Routes, Route, useMatch } from 'react-router-dom'
import UsersList from './components/UsersList'
import { useSelector } from 'react-redux'
import { user, reducerProps } from './interfaces'
import User from './components/User'
import Links from './components/Links'
import BlogPage from './components/BlogPage'

const App = () => {
  const users = useSelector((state: reducerProps) => {
    return state.users
  })

  const matchUser = useMatch('users/:id')

  const user = matchUser
    ? users.find((user: user) => user.id === matchUser.params.id)
    : null

  const loggedIn = useSelector((state: reducerProps) => {
    return state.auth
  })

  return (
    <div>
      <h1>Blogs</h1>

      <Notification />

      <Links />

      <FormLogin />

      {loggedIn ? <FormBlog /> : ''}

      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<User user={user} />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
      </Routes>
    </div>
  )
}

export default App
