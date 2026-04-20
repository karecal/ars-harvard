import { useContext } from 'react'
import { ArtContext } from '../../context/ArtContext'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

function HomePage() {
  const { artworks, loading, error } = useContext(ArtContext)

  if (loading) return <LoadingSpinner />
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>Colección</h2>
      {artworks.map(artwork => (
        <p key={artwork.id}>{artwork.title}</p>
      ))}
    </div>
  )
}

export default HomePage