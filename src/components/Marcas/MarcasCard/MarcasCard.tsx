import React from "react";
import styles from './MarcasCard.module.scss'

interface MarcasCardProps {
  logo: string;
}

export default function MarcasCard({ logo }: MarcasCardProps) {
  return (
    <div className={styles.card}>
      <img src={logo} alt="Logo da Marca" />
    </div>
  );
}
