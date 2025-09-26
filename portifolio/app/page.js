import Navbar from "../componentes/navbar";
import styles from "../styles/page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section id="home" className={styles.hero}>
        <Image
          src="/joaocarlos.png"
          alt="Minha Foto"
          width={350}
          height={400}
          className={styles.profile}
        />
        <div className={styles.textAndSkillsContainer}>
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
          <div className={styles.habilidadesContainer}>
            <h2>Habilidades</h2>
            <div className={styles.habilidadesGrid}>
              <div className={styles.habilidadeTag}>React</div>
              <div className={styles.habilidadeTag}>Next.js</div>
              <div className={styles.habilidadeTag}>Django</div>
              <div className={styles.habilidadeTag}>MySQL</div>
              <div className={styles.habilidadeTag}>Java</div>
              <div className={styles.habilidadeTag}>Python</div>
            </div>
          </div>
          
        </div>
      </section>
      <section id="projetos" className={styles.projetos}>
        <h2>Projetos</h2>

        <div className={styles.projetosGrid}>
          <div className={styles.projetoCard}>
            <Image
              src="/belladoceria.png"
              alt="Bella Doceria"
              width={400}
              height={200}
              className={styles.projetoImg}
            />
            <h3>Bella Doceria</h3>
            <p>

              Cardápio digital interativo para uma doceria, permitindo que os clientes
              visualizem os produtos e peça pelo whatsapp.
            </p>
            <p><strong>Tecnologias:</strong> Django, MySQL, HTML, CSS</p>
            <a href="https://github.com/liralves/Projeto-Integrador" target="_blank" className={styles.githubLink}>Ver no GitHub</a>
          </div>
          <div className={styles.projetoCard}>
            <Image
              src="/filmeflix.png"
              alt="FilmeFlix"
              width={400}
              height={200}
              className={styles.projetoImg}
            />
            <h3>FilmeFlix</h3>
            <p>
              Aplicação que consome a API do TMDB para exibir filmes populares,
              por categoria e gênero, em uma interface estilo streaming.
            </p>
            <p><strong>Tecnologias:</strong> Next.js, React, TMDB API</p>
            <a href="https://github.com/joaocarloss112/filmeflix" target="_blank" className={styles.githubLink}>Ver no GitHub</a>
          </div>
          <div className={styles.projetoCard}>
            <Image
              src="/webdriver.png"
              alt="Automação com WebDriver"
              width={400}
              height={200}
              className={styles.projetoImg}
            />
            <h3>Automação com WebDriver</h3>
            <p>
              Sistema de automação em Python para fazer um webdriver
              integrado a banco MySQL para armazenar resultados e relatórios.
            </p>
            <p><strong>Tecnologias:</strong> Python e MySQL</p>
            <a href="https://github.com/joaocarloss112/webdriver" target="_blank" className={styles.githubLink}>Ver no GitHub</a>
          </div>
          <div className={styles.projetoCard}>
            <Image
              src="/portifolio.png"
              alt="Portfifolio"
              width={400}
              height={200}
              className={styles.projetoImg}
            />
            <h3>Portfólio</h3>
            <p>
              Meu portfólio pessoal desenvolvido em Next.js, onde apresento minha
              trajetória, habilidades e projetos.
            </p>
            <p><strong>Tecnologias:</strong> Next.js, React, CSS Modules</p>
            <a href="https://github.com/joaocarloss112/portifolio" target="_blank" className={styles.githubLink}>Ver no GitHub</a>
          </div>
        </div>
        </section>
        <section id="contact" className={styles.contact}>
          <h2>Contato</h2>
          <div className={styles.contactContainer}>
            <div className={styles.contactItem}>
              <img src="/maildotru.svg" alt="Email" className={styles.icon}/>
              <a href="mailto:joaocarloss11@hotmail.com">joaocarloss11@hotmail.com</a>
            </div>
            <div className={styles.contactItem}>
              <img src="/github.svg" alt="GitHub" className={styles.icon}/>
              <a href="https://github.com/joaocarloss112" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
            <div className={styles.contactItem}>
              <img src="/linkedin.svg" alt="LinkedIn" className={styles.icon}/>
              <a href="https://linkedin.com/in/joão-carlos-barbosa-da-silva-81551119a" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </section>


    </div>
  );
}
