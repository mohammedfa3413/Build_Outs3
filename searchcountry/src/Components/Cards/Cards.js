import React from 'react';
import styles from "./Cards.module.css";

function Cards({ country }) {
  return (
    <div className={styles.container}>
      {country.map((c) => (
        <div key={c.cca3} className={styles.cards}>
          <img src={c.flags.png} alt={c.name.common} className={styles.img} />
          <h2>{c.name.common}</h2>
        </div>
      ))}
    </div>
  );
}

export default Cards;
