import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>🏛️ Ars Harvard</Link>
    </nav>
  )
}

export default Navbar