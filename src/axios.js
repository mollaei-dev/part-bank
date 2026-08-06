import axios from 'axios'
const api = axios.create({
  baseURL: 'https://turbofront5.onrender.com',
  timeout: 5000,
  headers: {
    'content-type': 'application.json',
  },
})
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
export default api
