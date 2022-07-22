import logoMarca from '../../assets/img/logo.svg'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="" className={styles.logo}>
        <img src={logoMarca} alt="" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="">sobre</a>
          </li>
          <li>
            <a href="">animais</a>
          </li>
          <li>
            <a href="">contatos</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
