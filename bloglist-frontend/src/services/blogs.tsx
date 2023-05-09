import axios, { AxiosRequestConfig } from 'axios'
import { blog, blogMongo, commentProps } from '../interfaces'

const VITE_BASE_URI = import.meta.env.VITE_BASE_URI
const baseUrl = VITE_BASE_URI ? `${VITE_BASE_URI}/api/blogs` : '/api/blogs'

let token: string | null = null
let config: AxiosRequestConfig<any> | undefined

const setToken = (newToken: string | null) => {
  token = `Bearer ${newToken}`
  config = {
    headers: { Authorization: token },
  }
}

const getAll = () => {
  const request = axios.get(baseUrl)
  console.log(baseUrl)
  return request.then((response) => response.data)
}

const create = async (newObject: blogMongo) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const commentBlog = async (
  id: { id: string | undefined },
  newObject: commentProps,
) => {
  const response = await axios.post(
    `${baseUrl}/${String(id?.id)}/comments`,
    newObject,
  )
  return response.data
}

const update = (newObject: blog | blogMongo) => {
  const request = axios.put(`${baseUrl}/${newObject.id}`, newObject)
  return request.then((response) => response.data)
}

const remove = async (id: string | undefined) => {
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

export default { getAll, create, update, setToken, remove, commentBlog }
