import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Renek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>emaildeteste@teste.com</li>
          <li>(99) 99999-9999</li>
          <li>Rua Teste Teste, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;