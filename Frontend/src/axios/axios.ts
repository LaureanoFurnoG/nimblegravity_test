import axios from 'axios'

const instanceAxios = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 1000
})

export default instanceAxios