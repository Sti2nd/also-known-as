import Button from "react-bootstrap/Button";
import styles from "./StartView.module.css";

interface IStartView {
  setShowPlayView: (a: boolean) => void;
}

export default function StartView({ setShowPlayView }: IStartView) {
  return (
    <div className={styles.headerSection}>
      <h1>Spill Alias online</h1>
      <p>
        Klikk på knappen for å begynne!
      </p>
      <Button onClick={() => setShowPlayView(true)}>Spill Alias</Button>
    </div>
  );
}
