import { Routes, Route } from 'react-router-dom'
import ArtProvider from './context/ArtContext'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage'
import ArtworkDetailPage from './pages/ArtworkDetailPage/ArtworkDetailPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
  return (
    <ArtProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artwork/:id" element={<ArtworkDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ArtProvider>
  )
}

export default App