import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxiosGet = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState("")
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true))
  }, [url])

  return { data, error, loaded }
}

export default useAxiosGet
