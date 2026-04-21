import { createContext, useState, useEffect, useMemo } from 'react'

export const ArtContext = createContext()

function ArtProvider({ children }) {
  const [artworks, setArtworks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const PAGE_SIZE = 50

  const API_KEY = import.meta.env.VITE_API_KEY
  const API_URL = import.meta.env.VITE_API_URL

  useEffect(() => {
    setLoading(true)
    const page_param = (page - 1) * PAGE_SIZE
    fetch(`${API_URL}/object?apikey=${API_KEY}&hasimage=1&size=${PAGE_SIZE}&page=${page}`)
      .then(res => res.json())
      .then(data => {
        setArtworks(data.records)
        setTotalPages(Math.ceil(data.info.totalrecordsperquery / PAGE_SIZE))
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
      artworks,
      loading,
      error,
      classifications,
      cultures,
      departments,
      page,
      setPage,
      totalPages
    }}>
      {children}
    </ArtContext.Provider>
  )
}

export default ArtProvider