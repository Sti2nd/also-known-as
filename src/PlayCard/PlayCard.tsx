import styles from "./PlayCard.module.css";

export interface ICard {
  words: string[];
};

export default function PlayCard({ words }: ICard) {
  const items = words.map(word => (
    <li key={word} className={styles.cardListItem}>{word}</li>
  ));
  
  return (
    <div className={styles.card}>
      <ol className={styles.cardList}>
        {items}
      </ol>
    </div>
  );
}