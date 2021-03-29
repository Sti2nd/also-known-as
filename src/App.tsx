import styles from "./App.module.css";
import words from "./difficult_words";
import { knuthShuffle as shuffle } from "knuth-shuffle";

import { useState } from "react";
import PlayView from "./PlayView/PlayView";
import StartView from "./StartView/StartView";
import { Button, Container } from "react-bootstrap";

export default function App() {
  const shuffledWords = shuffle(words.slice());
  const [showPlayView, setShowPlayView] = useState<boolean>();

  return (
    <>
      <Button>Menu</Button>
      <Container className={styles.appContainer}>
        {showPlayView ? (
          <div className={styles.playContainer}>
            <PlayView words={shuffledWords} />
          </div>
        ) : (
          <StartView setShowPlayView={setShowPlayView} />
        )}
      </Container>
    </>
  );
}
