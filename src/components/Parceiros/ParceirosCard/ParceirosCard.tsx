import styles from "./ParceirosCard.module.scss";

interface ParceirosCardProps {
  name: string;
  description: string;
  image: string;
}

export default function ParceirosCard({
  name,
  description,
  image,
}: ParceirosCardProps) {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.content}>
        <h2>{name}</h2>
        <p>{description}</p>
        <button>
          <a href="#">CONFIRA</a>
        </button>
      </div>
    </div>
  );
}
