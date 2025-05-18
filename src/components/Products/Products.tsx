import { useState } from "react";
import ProductsList from "./components/ProductsList/ProductsList";
import styles from "./Products.module.scss";

interface ProductsListProps {
  isFirstTime: boolean;
}

export default function Products({ isFirstTime }: ProductsListProps) {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.lineOne}></div>
        <h2>Produtos Relacionados</h2>
        <div className={styles.lineTwo}></div>
      </div>
      {/* Barra de navegação ou botão baseado em isFirstTime */}
      {isFirstTime ? (
        <div className={styles.navWrapper}>
          {[
            "CELULAR",
            "ACESSÓRIOS",
            "TABLETS",
            "NOTEBOOKS",
            "TVS",
            "VER TODOS",
          ].map((label, index) => (
            <a
              key={index}
              className={index === 0 ? styles.navLinkActive : styles.navLink} // O primeiro botão terá uma cor diferente
              onClick={() => setActiveButton(index)}
              href="#"
            >
              {label}
            </a>
          ))}
        </div>
      ) : (
        <a href="#" className={styles.verTodos}>Ver todos</a>
      )}
      <ProductsList />
    </section>
  );
}
