import React from "react";
import styles from "./TypesCardsGen.module.scss";

interface TypesCardsGenProps {
  iconUrl: string;
  type: string;
  className?: string;
  isActive?: boolean;
}

export default function TypesCardsGen({
  iconUrl,
  type,
  isActive,
}: TypesCardsGenProps) {
  return (
    <a href="#">
      <div className={`${styles.card} ${isActive ? styles.active : ""}`}>
        <div className={styles.content}>
          <img src={iconUrl} alt={type} />
        </div>
        <p>{type}</p>
      </div>
    </a>
  );
}
