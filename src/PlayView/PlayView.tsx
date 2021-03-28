import { useState } from "react";
import Button from "react-bootstrap/Button";
import PlayCard, { ICard } from "../PlayCard/PlayCard";
import styles from "./PlayView.module.css";

export default function PlayView({ words }: ICard) {
  const NUM_WORDS_PER_CARD = 8;
  const [cardNumber, setCardNumber] = useState<number>(0);
  const startWordPosition = cardNumber * NUM_WORDS_PER_CARD;
  const endWordPosition = startWordPosition + 8;

  const previousCard = () => {
    if (cardNumber === 0) return;
    setCardNumber(cardNumber - 1);
  };

  const nextCard = () => {
    setCardNumber(cardNumber + 1);
  };

  return (
    <>
      <PlayCard words={words.slice(startWordPosition, endWordPosition)} />
      <hr />
      <Button
        className="mr-4"
        disabled={cardNumber === 0}
        onClick={previousCard}
      >
        Forrige
      </Button>
      <Button className="ml-4" onClick={nextCard}>
        Neste
      </Button>
    </>
  );
}
