import styles from './App.module.css';
import Card from './Card/Card';

export default function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.headerSection}>
        <h1>Play Alias online</h1>
        <p>Currently only Norwegian is supported. Click on the button to begin!</p>
      </div>
      <Card words={["Nasjonalforsamlingen", "Advare", "Dialog", "Pløye", "Jens Stoltenberg", "Skuffelse", "Prins", "Fundere"]} />
    </div>
  );
}
