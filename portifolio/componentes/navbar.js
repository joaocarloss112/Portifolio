import styles from "../styles/page.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="#home">Início</a>
      <a href="#about">Sobre</a>
      <a href="#skills">Habilidades</a>
      <a href="projetos">Projetos</a>
      <a href="#contact">Contato</a>
    </nav>
  );
}
