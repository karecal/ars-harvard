import { useContext, useEffect, useState } from 'react'
import { ArtContext } from '../../context/ArtContext'
import useArtworks from '../../hooks/useArtworks'
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import SearchBar from '../../components/SearchBar/SearchBar'
import Pagination from '../../components/Pagination/Pagination'
import styles from './HomePage.module.css'

function HomePage() {
  const { artworks, loading, error, page, setPage, totalPages } = useArtworks()
  const { classifications, cultures, departments, filters, handleFilterChange, handleReset } = useContext(ArtContext)

  const [showHeading, setShowHeading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowHeading(window.scrollY < 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePageChange = (newPage) => {
    setPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) return <LoadingSpinner />
  if (error) return <p>Error: {error}</p>

  return (
    <main className={styles.main}>
      {showHeading && <h2 className={styles.heading}>Colección</h2>}
      <SearchBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
        classifications={classifications}
        cultures={cultures}
        departments={departments}
      />
      {artworks.length === 0 ? (
        <p className={styles.noResults}>No se encontraron obras para tu búsqueda</p>
      ) : (
        <div className={styles.grid}>
          {artworks.map(artwork => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      )}
      <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </main>
  )
}

export default HomePage