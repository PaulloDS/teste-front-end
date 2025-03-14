import React from "react";
import styles from "./Navbar.module.scss";
import CompraSegura from "../../../../assets/compra_segura.png";
import FreteGratis from "../../../../assets/frete_gratis.png";
import Parcele from "../../../../assets/parcele.png";
import Logo from "../../../../assets/logo.png";
import MagnifyingGlass from "../../../../assets/MagnifyingGlass.png";
import Group from "../../../../assets/Group.png";
import Heart from "../../../../assets/Heart.png";
import UserCircle from "../../../../assets/UserCircle.png";
import ShoppingCart from "../../../../assets/ShoppingCart.png";
import CrownSimple from "../../../../assets/CrownSimple.png";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.advertisements}>
        <img src={CompraSegura} alt="Compra 100% Segura" />
        <img src={FreteGratis} alt="Frete Grátis acima de R$ 200" />
        <img src={Parcele} alt="Parcele suas compras" />
      </div>
      <div className={styles.searchbar}>
        <div>
          <img src={Logo} alt="Logo eConverse" />
        </div>
        <div className={styles.input}>
          <input type="text" placeholder="O que você está buscando?" />
          <img src={MagnifyingGlass} alt="Lupa" />
        </div>
        <div className={styles.icons}>
          <a href="/">
            <img src={Group} alt="Group" />
          </a>
          <a href="/">
            <img src={Heart} alt="Group" />
          </a>
          <a href="/">
            <img src={UserCircle} alt="Group" />
          </a>
          <a href="/">
            <img src={ShoppingCart} alt="Group" />
          </a>
        </div>
      </div>
      <div className={styles.navigation}>
        <a href="/">TODAS AS CATEGORIAS</a>
        <a href="/">SUPERMERCADO</a>
        <a href="/">LIVROS</a>
        <a href="/">MODA</a>
        <a href="/">LANÇAMENTOS</a>
        <a href="/" className={styles.ofertas}>
          OFERTAS DO DIA
        </a>
        <a href="/" className={styles.crown}>
          {" "}
          <img src={CrownSimple} alt="" /> ASSINATURA
        </a>
      </div>
    </nav>
  );
}
