import styles from './header.module.css'
import logimg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header(){
  return(
    <header className={styles.container}>
      <Link to="/">
        <img src={logimg} alt="Logo Cripto App" />
      </Link>
    </header>
  )
}
