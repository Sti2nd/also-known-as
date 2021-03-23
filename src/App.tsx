import styles from './App.module.css';
import Card from './Card/Card';
import words from "./difficult_words";

export default function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.headerSection}>
        <h1>Play Alias online</h1>
        <p>Currently only Norwegian is supported. Click on the button to begin!</p>
      </div>
      <Card words={words} />
    </div>
  );
}
