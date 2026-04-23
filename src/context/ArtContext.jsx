import { createContext, useState, useEffect, useMemo } from 'react'

export const ArtContext = createContext()

const PAGE_SIZE = 50

function ArtProvider({ children }) {
  const [artworks, setArtworks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const API_KEY = import.meta.env.VITE_API_KEY
  const API_URL = import.meta.env.VITE_API_URL

  useEffect(() => {
    setLoading(true)
    fetch(`${API_URL}/object?apikey=${API_KEY}&hasimage=1&size=${PAGE_SIZE}&page=${page}`)
      .then(res => res.json())
      .then(data => {
        setArtworks(data.records)
        setTotalPages(data.info?.pages || 0)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [page])

  const classifications = useMemo(() => {
    const values = artworks.map(a => a.classification).filter(Boolean)
    return [...new Set(values)].sort()
  }, [artworks])

  const cultures = useMemo(() => {
    const values = artworks.map(a => a.culture).filter(Boolean)
    return [...new Set(values)].sort()
  }, [artworks])

  const departments = useMemo(() => {
    const values = artworks.map(a => a.department).filter(Boolean)
    return [...new Set(values)].sort()
  }, [artworks])

  return (
    <ArtContext.Provider value={{
      artworks, loading, error,
      classifications, cultures, departments,
      page, setPage, totalPages
    }}>
      {children}
    </ArtContext.Provider>
  )
}

export default ArtProvider