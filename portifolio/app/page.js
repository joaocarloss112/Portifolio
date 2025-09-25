import Navbar from "../componentes/navbar";
import styles from "../styles/page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section id="home" className={styles.hero}>
        {/* Item 1 da seção: A FOTO */}
        <Image
          src="/joaocarlos.png"
          alt="Minha Foto"
          width={350}
          height={400}
          className={styles.profile}
        />

        {/* Item 2 da seção: A "CAIXA" (SEU QUADRADO AZUL) */}
        <div className={styles.textAndSkillsContainer}>

          {/* Coisa 1 dentro da caixa: O TEXTO */}
          <div className={styles.textoNome}>
            <h1>João Carlos</h1>
            <p>
              Sou estudante de Ciência da Computação e em rumo ao
              desenvolvimento Full Stack, tenho experiencia em projetos Web
              utilizando o framework Django, React e Next. Além disso, estou
              contribuindo em um projeto de RPA e um cardápio digital para uma
              doceria. .
            </p>
          </div>

          {/* Coisa 2 dentro da caixa: AS HABILIDADES */}
          <div className={styles.habilidadesContainer}>
            <h2>Habilidades</h2>
            <div className={styles.habilidadesGrid}>
              <div className={styles.habilidadeTag}>React</div>
              <div className={styles.habilidadeTag}>Next.js</div>
              <div className={styles.habilidadeTag}>Node.js</div>
              <div className={styles.habilidadeTag}>MySQL</div>
              <div className={styles.habilidadeTag}>Java</div>
              <div className={styles.habilidadeTag}>Python</div>
            </div>
          </div>
          
        </div>
      </section>
      {}
      <section id="projetos" className={styles.projetos}>
        <h2>Projetos</h2>
      </section>

      {}
      <section id="contact" className={styles.contact}>
        <h2>Contato</h2>
        <p>Email: joaocarlos@email.com</p>
        <p>
          <a href="https://github.com/seuusuario" target="_blank">GitHub</a> |
          <a href="https://linkedin.com/in/seuusuario" target="_blank"> LinkedIn</a>
        </p>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} João Carlos</p>
      </footer>
    </div>
  );
}
