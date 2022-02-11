import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: { 'x-api-key': process.env.REACT_APP_API_KEY },
})

const axiosHelper = async ({ url, data, method }) => {
  try {
    const response = await instance({ url, data, method })
    return response
  } catch (error) {
    throw new Error(`Service failed, error: ${error}`)
  }
}

export default axiosHelper
