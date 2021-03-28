import Button from "react-bootstrap/Button";
import styles from "./StartView.module.css";

interface IStartView {
  setShowPlayView: (a: boolean) => void;
}

export default function StartView({ setShowPlayView }: IStartView) {
  return (
    <div className={styles.headerSection}>
      <h1>Play Alias online</h1>
      <p>
        Currently only Norwegian is supported. Click on the button to begin!
      </p>
      <Button onClick={() => setShowPlayView(true)}>Start playing</Button>
    </div>
  );
}
