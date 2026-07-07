import axios from 'axios'
const api = axios.create({
  baseURL: 'https://turbofront5.onrender.com',
  timeout: 5000,
  headers: {
    'context-type': 'application.json',
  },
})
export default api
