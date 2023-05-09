import { createSlice } from '@reduxjs/toolkit'
import { blog, blogMongo } from '../interfaces'
import blogService from '../services/blogs'

type bloggo = blog | blogMongo

const blogSlice = createSlice({
  name: 'blog',
  initialState: [] as bloggo[],
  reducers: {
    create(state, action) {
      state.push(action.payload)
    },
    like(state, action) {
      const id = action.payload.id
      const updatedBlog = action.payload
      return state.map((blog) => (blog?.id !== id ? blog : updatedBlog))
    },
    setBlogs(_state, action) {
      return action.payload
    },
    appendBlog(state, action) {
      state.push(action.payload)
    },
    remove(state, action) {
      const id = action.payload
      return state.filter((blog) => blog?.id !== id)
    },
    createComment(state, action) {
      const stateFilter = state.filter((s) => s.id !== action.payload.id)
      return [...stateFilter, action.payload]
    },
  },
})

export const initializeBlogs = () => {
  return async (
    dispatch: (arg0: { payload: any; type: 'blog/setBlogs' }) => void,
  ) => {
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs))
  }
}

export const createBlog = (content: blogMongo) => {
  return async (
    dispatch: (arg0: { payload: any; type: 'blog/appendBlog' }) => void,
  ) => {
    const newBlog = await blogService.create(content)
    dispatch(appendBlog(newBlog))
  }
}

export const addComment = (
  id: { id: string | undefined },
  comment: string,
  username: string,
) => {
  return async (
    dispatch: (arg0: { payload: any; type: 'blog/createComment' }) => void,
  ) => {
    await blogService.commentBlog(id, { comment, username })
    dispatch(createComment(String(id)))
  }
}

export const updateBlogLikes = (blog: blogMongo) => {
  return async (
    dispatch: (arg0: { payload: any; type: 'blog/like' }) => void,
  ) => {
    const updateBlog = await blogService.update(blog)
    dispatch(like(updateBlog.id))
  }
}

export const removeBlog = (id: string | undefined) => {
  return async (
    dispatch: (arg0: { payload: any; type: 'blog/remove' }) => void,
  ) => {
    const deletedBlog = await blogService.remove(id)
    dispatch(remove(deletedBlog))
  }
}
export const { create, like, appendBlog, setBlogs, remove, createComment } =
  blogSlice.actions
export default blogSlice.reducer
