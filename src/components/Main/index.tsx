import styles from './Main.module.css'
import wolfUm from '../../assets/img/lobo1.jpg'
import wolfDois from '../../assets/img/wolf2.jpg'
import wolfTres from '../../assets/img/wolf3.jpg'
import anuncioUm from '../../assets/img/anuncio-1.jpg'
import anuncioDis from '../../assets/img/anuncio-2.jpg'

export const Main = () => {
  return (
    <>
      <main className={styles.conteudo}>
        <div className={styles.titulo}>
          <h1>Lobo Cinza</h1>
          <span>da familia canis lupus</span>
        </div>
        <div className={styles.caracteristicas}>
          <div>
            <span className={styles.numero}>72</span>
            <span className={styles.rotulo}>kg</span>
          </div>
          <div>
            <span className={styles.numero}>13</span>
            <span className={styles.rotulo}>age</span>
          </div>
        </div>

        <p className={styles.colWide}>
          É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
          cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos
          genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico
        </p>
        <img src={wolfUm} alt="" className={styles.img1} />
        <p className={styles.destaque}>
          É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
          cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos.
        </p>
        <img src={wolfDois} alt="" className={styles.img2} />
        <p>
          O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a
          aumentar proporcionalmente com a latitude, como previsto pela teoria
          de Christian Bergmann. Em geral, a altura, medida a partir dos ombros,
          varia de 60 a 95 centímetros.
        </p>
        <p>
          O peso varia geograficamente. Em média, os lobos europeus pesam 38,5
          kg; os lobos da América do Norte, 36 kg; os lobos indianos e árabes,
          25 kg.[7] Embora raros, lobos com mais de 77 kg foram encontrados no
          Alasca, Canadá,[8] e na antiga União Soviética.
        </p>
        <blockquote className={`${styles.citacao} ${styles.colWide}`}>
          <p>
            “Há algo no uivar do lobo que tira um homem do aqui e agora e o
            transporta para uma floresta da mente.”
          </p>
        </blockquote>
        <ul className={styles.atributos}>
          <li>Surgiu: 12.0000 anos</li>
          <li>Tipo: Mamífero</li>
          <li>Idade Média: 13 anos</li>
          <li>Macho adulto: 80kg</li>
          <li>Fêmea adulta: 55kg</li>
          <li>Família: Lupus</li>
        </ul>
        <div className={styles.informacoes}>
          <p>
            É um sobrevivente da Era do Gelo, originário do Pleistoceno
            Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e
            estudos genéticos reafirmam que o lobo cinzento é ancestral do cão
            doméstico.
          </p>
          <p>
            É um sobrevivente da Era do Gelo, originário do Pleistoceno
            Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e
            estudos genéticos reafirmam que o lobo cinzento é ancestral do cão
            doméstico.
          </p>
        </div>
        <img src={wolfTres} alt="" className={styles.colWide} />
      </main>
      <aside className={styles.anuncios}>
        <div className={styles.anuncioItem}>
          <img src={anuncioUm} alt="" />
        </div>
        <div className={styles.anuncioItem}>
          <img src={anuncioDis} alt="" />
        </div>
      </aside>
      <footer className={styles.footer}>
        <p>Origamid © 2012 - 2017. Alguns direitos reservados.</p>
      </footer>
    </>
  )
}
