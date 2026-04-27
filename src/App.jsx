import { Routes, Route } from 'react-router-dom'
import ArtProvider from './context/ArtContext'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage'
import ArtworkDetailPage from './pages/ArtworkDetailPage/ArtworkDetailPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import LoginPage from './pages/LoginPage/LoginPage'
import Footer from './components/Footer/Footer'
import AboutPage from './pages/AboutPage/AboutPage'
import TeamPage from './pages/TeamPage/TeamPage'
import FaqPage from './pages/FaqPage/FaqPage'
import ContactPage from './pages/ContactPage/ContactPage'
import NewsletterPage from './pages/NewsletterPage/NewsletterPage'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
 <ArtProvider>
  <ScrollToTop />
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/artwork/:id" element={<ArtworkDetailPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/team" element={<TeamPage />} />
    <Route path="/faq" element={<FaqPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/newsletter" element={<NewsletterPage />} />
  </Routes>
  <Footer />
</ArtProvider>
  )
}

export default App