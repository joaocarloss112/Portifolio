"use client";
import { useState, useEffect } from "react";
import styles from "../../styles/jogo.module.css";

const PALAVRAS = [
  "SPORT",
  "VITORIA",
  "FLAMENGO",
  "CRUZEIRO",
  "INTERNACIONAL",
  "TUPI",
  "CRICIUMA",
  "HOLANDA",
  "BRASIL",
  "BELGICA",
  "CRB",
  "CSA",
  "AMERICA DE PERNAMBUCO",
  "BRUSQUE"
];

function Jogo() {
  const [palavra, setPalavra] = useState(null); 
  const [letrasCertas, setLetrasCertas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);

  const maxTentativas = 6;

  useEffect(() => {
    const p = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
    setPalavra(p.toUpperCase());
  }, []);

  const verificarLetra = (letra) => {
    if (!palavra) return;
    letra = letra.toUpperCase();
    if (letrasCertas.includes(letra) || letrasErradas.includes(letra)) return;

    if (palavra.includes(letra)) {
      setLetrasCertas((prev) => [...prev, letra]);
    } else {
      setLetrasErradas((prev) => [...prev, letra]);
    }
  };

  if (!palavra) {
    return (
      <main className={styles.container}>
        <p className={styles.loading}>Carregando jogo...</p>
      </main>
    );
  }

  const palavraCompleta = palavra
    .split("")
    .map((letra) => (letra === " " ? " " : letrasCertas.includes(letra) ? letra : "_"))
    .join(" ");

  const venceu = !palavraCompleta.includes("_");
  const perdeu = letrasErradas.length >= maxTentativas;

  const reiniciar = () => {
    const novo = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
    setPalavra(novo.toUpperCase());
    setLetrasCertas([]);
    setLetrasErradas([]);
  };

  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <>
      <div className={styles.topbar}>
        <a href="/" className={styles.voltar}>Voltar ao Portfólio</a>
      </div>
      <main className={styles.container}>
        <h1 className={styles.title}> Jogo da Forca</h1>

      <svg
        height="250"
        width="200"
        className={styles.forca}
        viewBox="0 0 200 250"
        aria-hidden="true"
      >
        <line x1="20" y1="230" x2="180" y2="230" stroke="white" strokeWidth="4" />
        <line x1="50" y1="20" x2="50" y2="230" stroke="white" strokeWidth="4" />
        <line x1="50" y1="20" x2="140" y2="20" stroke="white" strokeWidth="4" />
        <line x1="140" y1="20" x2="140" y2="50" stroke="white" strokeWidth="4" />
        {letrasErradas.length > 0 && (
          <circle cx="140" cy="70" r="20" stroke="white" strokeWidth="4" fill="none" />
        )}
        {letrasErradas.length > 1 && (
          <line x1="140" y1="90" x2="140" y2="150" stroke="white" strokeWidth="4" />
        )}
        {letrasErradas.length > 2 && (
          <line x1="140" y1="110" x2="110" y2="130" stroke="white" strokeWidth="4" />
        )}
        {letrasErradas.length > 3 && (
          <line x1="140" y1="110" x2="170" y2="130" stroke="white" strokeWidth="4" />
        )}
        {letrasErradas.length > 4 && (
          <line x1="140" y1="150" x2="120" y2="190" stroke="white" strokeWidth="4" />
        )}
        {letrasErradas.length > 5 && (
          <line x1="140" y1="150" x2="160" y2="190" stroke="white" strokeWidth="4" />
        )}
      </svg>

      <p className={styles.palavra}>{palavraCompleta}</p>

      <p className={styles.status}>
        Tentativas restantes: <span className={styles.bold}>{maxTentativas - letrasErradas.length}</span>
      </p>
      <p className={styles.status}>
        Letras erradas: <span className={styles.errou}>{letrasErradas.join(", ") || "—"}</span>
      </p>

      {!venceu && !perdeu && (
        <div className={styles.teclado}>
          {alfabeto.map((letra) => {
            const usada = letrasCertas.includes(letra) || letrasErradas.includes(letra);
            const classe =
              letrasCertas.includes(letra) ? `${styles.btn} ${styles.certa}` :
              letrasErradas.includes(letra) ? `${styles.btn} ${styles.errada}` :
              styles.btn;
            return (
              <button
                key={letra}
                onClick={() => verificarLetra(letra)}
                disabled={usada}
                className={classe}
                aria-label={`Letra ${letra}`}
              >
                {letra}
              </button>
            );
          })}
        </div>
      )}

      {venceu && <h2 className={styles.mensagem}> Você venceu! A palavra era "{palavra}"</h2>}
      {perdeu && <h2 className={styles.mensagem}> Você perdeu! A palavra era "{palavra}"</h2>}

      {(venceu || perdeu) && (
        <button className={styles.reiniciar} onClick={reiniciar}>
          Reiniciar Jogo
        </button>
      )}
      </main>
    </>
  );
}

export default function Page() {
  return <Jogo />;
}
