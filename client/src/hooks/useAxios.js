import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = (method, url, payload) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState("")
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    if (method === 'GET') {
      axios.request({
        method,
        url
      })
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true))
    }
    if (method === 'POST') {
      axios.request({
        method,
        url,
        data: payload
      })
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true))
    }
  }, [method, url, payload])

  return { data, error, loaded }
}

export default useAxios
