import { useContext, useState, useMemo } from 'react'
import { ArtContext } from '../../context/ArtContext'
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import SearchBar from '../../components/SearchBar/SearchBar'
import Pagination from '../../components/Pagination/Pagination'
import styles from './HomePage.module.css'

function HomePage() {
  const { artworks, loading, error, classifications, cultures, departments, page, setPage, totalPages } = useContext(ArtContext)

  const [filters, setFilters] = useState({
    query: '',
    classification: '',
    culture: '',
    department: '',
    sort: '',
    yearFrom: '',
    yearTo: ''
  })

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const handlePageChange = (newPage) => {
    setPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const filteredArtworks = useMemo(() => {
    let result = [...artworks]

    if (filters.query) {
      const lower = filters.query.toLowerCase()
      result = result.filter(a =>
        a.title?.toLowerCase().includes(lower) ||
        a.people?.some(p => p.name?.toLowerCase().includes(lower))
      )
    }

    if (filters.classification) {
      result = result.filter(a => a.classification === filters.classification)
    }

    if (filters.culture) {
      result = result.filter(a => a.culture === filters.culture)
    }

    if (filters.department) {
      result = result.filter(a => a.department === filters.department)
    }

    if (filters.yearFrom) {
      result = result.filter(a => a.dateend >= parseInt(filters.yearFrom))
    }

    if (filters.yearTo) {
      result = result.filter(a => a.datebegin <= parseInt(filters.yearTo))
    }

    if (filters.sort === 'asc') {
      result.sort((a, b) => (a.datebegin || 0) - (b.datebegin || 0))
    } else if (filters.sort === 'desc') {
      result.sort((a, b) => (b.datebegin || 0) - (a.datebegin || 0))
    }

    return result
  }, [artworks, filters])

  if (loading) return <LoadingSpinner />
  if (error) return <p>Error: {error}</p>

  return (
    <main className={styles.main}>
      <h2 className={styles.heading}>Colección</h2>
      <SearchBar
        filters={filters}
        onFilterChange={handleFilterChange}
        classifications={classifications}
        cultures={cultures}
        departments={departments}
      />
      {filteredArtworks.length === 0 ? (
        <p className={styles.noResults}>No se encontraron obras para tu búsqueda</p>
      ) : (
        <div className={styles.grid}>
          {filteredArtworks.map(artwork => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      )}
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  )
}

export default HomePage