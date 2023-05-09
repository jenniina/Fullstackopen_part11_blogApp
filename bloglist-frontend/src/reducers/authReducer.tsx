import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'
import loginService from '../services/login'

const authSlice = createSlice({
  name: 'auth',
  initialState: null,
  reducers: {
    setUser(_state, action) {
      return action.payload
    },
    loginUser(_state, action) {
      return action.payload
    },
    logoutUser(_state, action) {
      return action.payload
    },
  },
})

export const initializeUser = () => {
  return async (
    dispatch: (arg0: { payload: any; type: 'auth/setUser' }) => void,
  ) => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
      dispatch(setUser(user))
    }
  }
}

export const login = (username: string, password: string) => {
  return async (
    dispatch: (arg0: { payload: any; type: 'auth/loginUser' }) => void,
  ) => {
    const user = await loginService.login({
      username,
      password,
    })
    window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
    blogService.setToken(user.token)
    dispatch(loginUser(user))
  }
}

export const logout = () => {
  return async (
    dispatch: (arg0: { payload: any; type: 'auth/logoutUser' }) => void,
  ) => {
    window.localStorage.removeItem('loggedBlogAppUser')
    dispatch(logoutUser(null))
  }
}
export const { setUser, loginUser, logoutUser } = authSlice.actions
export default authSlice.reducer
