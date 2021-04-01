import styles from "./PlayCard.module.css";

export interface ICard {
  words: string[];
}

export default function PlayCard({ words }: ICard) {
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const items = words.map((word) => (
    <li key={word} className={styles.cardListItem}>
      {capitalizeFirstLetter(word)}
    </li>
  ));

  return (
    <div className={styles.card}>
      <ol className={styles.cardList}>{items}</ol>
    </div>
  );
}
