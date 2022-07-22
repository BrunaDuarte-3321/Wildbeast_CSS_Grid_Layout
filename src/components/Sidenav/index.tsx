import styles from './Sidenav.module.css'
import cervo from '../../assets/img/icones/cervo.svg'
import leao from '../../assets/img/icones/leao.svg'
import gato from '../../assets/img/icones/gato.svg'
import vaca from '../../assets/img/icones/vaca.svg'
import ovelha from '../../assets/img/icones/ovelha.svg'
import abelha from '../../assets/img/icones/abelha.svg'
export const Sidenav = () => {
  return (
    <nav className={styles.sidenav}>
      <ul>
        <li>
          <a href="">
            <img src={cervo} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={leao} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={gato} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={vaca} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={ovelha} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={abelha} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
