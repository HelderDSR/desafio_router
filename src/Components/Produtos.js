import React from "react";
import styles from "./Produtos.module.css";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto").then(r=> r.json()).then(json => setProdutos(json));
  }, []);

  if(produtos === null) return null;

  return (
    <div className={styles.produtos}>{produtos.map((poduto) => (
    <div key={produtos.id}>
      <h1>{produtos.nome}</h1>
    </div>))}
    </div>
  );
};

export default Produtos;
