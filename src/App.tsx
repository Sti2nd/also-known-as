import { knuthShuffle as shuffle } from "knuth-shuffle";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useState } from "react";

import styles from "./App.module.css";
import words from "./difficult_words";
import PlayView from "./PlayView/PlayView";
import StartView from "./StartView/StartView";

export default function App() {
  const shuffledWords = shuffle(words.slice());
  const [showPlayView, setShowPlayView] = useState<boolean>();

  return (
    <>
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Nav.Link href="" onClick={() => setShowPlayView(false)}>
            Hjem
          </Nav.Link>
        </Nav>
      </Navbar>
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
