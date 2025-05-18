
import styles from "./Parceiros.module.scss";
import ParceirosCard from "./ParceirosCard/ParceirosCard";
import ParceirosImage from "../../assets/parceiros.png";

type Props = {};

export default function Parceiros({}: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <ParceirosCard
          name={"Parceiros"}
          description={"Lorem ipsum dolor sit amet, consectetur"}
          image={ParceirosImage}
        />
        <ParceirosCard
          name={"Parceiros"}
          description={"Lorem ipsum dolor sit amet, consectetur"}
          image={ParceirosImage}
        />
      </div>
    </section>
  );
}
