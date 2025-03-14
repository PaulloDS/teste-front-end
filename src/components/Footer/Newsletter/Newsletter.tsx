import React, { useState } from "react";
import styles from "./Newsletter.module.scss";

export default function Newsletter() {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: any) => {
    if (!isChecked) {
      event.preventDefault();
      setError("Você deve aceitar os termos e condições");
    } else {
      setError(""); 
      alert("Inscrição realizada com sucesso!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.announced}>
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>
        <div className={styles.subscription}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
              required
            />
            <button type="submit">INSCREVER</button>
          </form>
          <div className={styles.check}>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <p>Aceito os termos e condições</p>
            {error && <p className={styles.error}>({error})</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
