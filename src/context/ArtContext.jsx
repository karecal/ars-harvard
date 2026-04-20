import { createContext, useState, useEffect } from 'react'

export const ArtContext = createContext()

function ArtProvider({ children }) {
  const [artworks, setArtworks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const API_KEY = import.meta.env.VITE_API_KEY
  const API_URL = import.meta.env.VITE_API_URL

  useEffect(() => {
    fetch(`${API_URL}/object?apikey=${API_KEY}&hasimage=1&size=50`)
      .then(res => res.json())
      .then(data => {
        setArtworks(data.records)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <ArtContext.Provider value={{ artworks, loading, error }}>
      {children}
    </ArtContext.Provider>
  )
}

export default ArtProvider