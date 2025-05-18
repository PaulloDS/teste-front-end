
import styles from "./Marcas.module.scss";
import MarcasCard from "./MarcasCard/MarcasCard";
import Logo from "../../assets/logo.png";

export default function Marcas() {
  const logos = [Logo, Logo, Logo, Logo, Logo];
  return (
    <section className={styles.container}>
      <h2>Navegue por marcas</h2>
      <div className={styles.content}>
        {logos.map((_logo, _index) => (
          <a href="#">
            <MarcasCard logo={Logo} />
          </a>
        ))}
      </div>
    </section>
  );
}
