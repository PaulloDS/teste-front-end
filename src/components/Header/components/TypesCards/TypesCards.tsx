
import styles from "./TypesCards.module.scss";
import TypesCardsGen from "./components/TypesCardsGen/TypesCardsGen";
import Tecnologia from "../../../../assets/tecnologia.png";
import Supermercado from "../../../../assets/supermercados.png";
import Bebidas from "../../../../assets/whiskey.png";
import Ferramentas from "../../../../assets/ferramentas.png";
import Saúde from "../../../../assets/cuidados-de-saude.png";
import Esportes from "../../../../assets/corrida.png";
import Moda from "../../../../assets/moda.png";

const categories = [
  { iconUrl: Tecnologia, type: "Tecnologia" },
  { iconUrl: Supermercado, type: "Supermercado" },
  { iconUrl: Bebidas, type: "Bebidas" },
  { iconUrl: Ferramentas, type: "Ferramentas" },
  { iconUrl: Saúde, type: "Saúde" },
  { iconUrl: Esportes, type: "Esportes e Fitness" },
  { iconUrl: Moda, type: "Moda" },
];

export default function TypesCards() {
  return (
    <div className={styles.types_cards}>
      <div className={styles.content}>
        {categories.map((category, index) => (
          <TypesCardsGen
            key={index}
            iconUrl={category.iconUrl}
            type={category.type}
            isActive={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
