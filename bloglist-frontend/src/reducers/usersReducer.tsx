import { createSlice } from '@reduxjs/toolkit'
import { user } from '../interfaces'
import userService from '../services/users'

const usersSlice = createSlice({
  name: 'users',
  initialState: [] as user[],
  reducers: {
    create(state: user[], action) {
      state.push(action.payload)
    },
    setUsers(_state, action) {
      return action.payload
    },
  },
})

export const initializeUsers = () => {
  return async (
    dispatch: (arg0: { payload: any; type: 'users/setUsers' }) => void,
  ) => {
    const users = await userService.getAll()
    dispatch(setUsers(users))
  }
}

export const { create, setUsers } = usersSlice.actions
export default usersSlice.reducer
