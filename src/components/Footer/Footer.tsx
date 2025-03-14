import React from "react";
import Newsletter from "./Newsletter/Newsletter";
import styles from "./Footer.module.scss";
import Logo from "../../assets/logo.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.png";

export default function Footer() {
  return (
    <footer>
      <Newsletter />
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.infos}>
            <img src={Logo} alt="Logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className={styles.icons}>
              <a href="https://www.instagram.com/econverse.ag/" target="_blank">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a
                href="https://www.facebook.com/agenciaeconverse"
                target="_blank"
              >
                <img src={Facebook} alt="Facebook" />
              </a>
              <a
                href="https://www.linkedin.com/company/econverse/"
                target="_blank"
              >
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </div>
          </div>
          <div className={styles.line}></div>
          <nav>
            <div className={styles.navContent}>
              <p>Institucional</p>
              <a href="#">Sobre Nós</a>
              <a href="#">Movimento</a>
              <a href="#">Trabalhe conosco</a>
            </div>
            <div className={styles.navContent}>
              <p>Ajuda</p>
              <a href="#">Suporte</a>
              <a href="#">Fale Conosco</a>
              <a href="#">Perguntas Frequentes</a>
            </div>
            <div className={styles.navContent}>
              <p>Termos</p>
              <a href="#">Termos e Condições</a>
              <a href="#">Política de Privacidade</a>
              <a href="#">Troca e Devolução</a>
            </div>
          </nav>
        </div>
        <div className={styles.extra}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  );
}
