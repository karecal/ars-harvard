import { useContext } from 'react'
import { ArtContext } from '../../context/ArtContext'
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import styles from './HomePage.module.css'

function HomePage() {
  const { artworks, loading, error } = useContext(ArtContext)

  if (loading) return <LoadingSpinner />
  if (error) return <p>Error: {error}</p>

  return (
    <main className={styles.main}>
      <h2 className={styles.heading}>Colección</h2>
      <div className={styles.grid}>
        {artworks.map(artwork => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </main>
  )
}

export default HomePage