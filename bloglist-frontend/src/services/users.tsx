import axios from 'axios'

const VITE_BASE_URI = import.meta.env.VITE_BASE_URI
const baseUrl = VITE_BASE_URI ? `${VITE_BASE_URI}/api/users` : '/api/users'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getAll }
