import { NavLink } from 'react-router-dom'
import { reducerProps } from '../interfaces'
import { useSelector } from 'react-redux'

const Links = () => {
  const loggedIn = useSelector((state: reducerProps) => {
    return state.auth
  })

  if (!loggedIn) return <div style={{ display: 'none' }}></div>
  return (
    <>
      <ul className="main-navigation">
        <li>
          <NavLink to="/"> Blogs</NavLink>
        </li>
        <li>
          <NavLink to="users"> Users</NavLink>
        </li>
      </ul>
    </>
  )
}

export default Links
