import "swiper/swiper.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import PlayCard, { ICard } from "../PlayCard/PlayCard";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./PlayView.module.css";
import { chunkArray } from "../tools";

export default function PlayView({ words }: ICard) {
  const NUM_WORDS_PER_CARD = 8;
  const [cardNumber, setCardNumber] = useState<number>(0);
  const cards = chunkArray(words, NUM_WORDS_PER_CARD)
    .filter((wordBatch) => wordBatch.length === NUM_WORDS_PER_CARD)
    .map((wordBatch, idx) => (
      <SwiperSlide className={styles.swiperContainer} key={idx}>
        <PlayCard key={idx} words={wordBatch} />
      </SwiperSlide>
    ));

  const previousCard = () => {
    if (cardNumber === 0) return;
    setCardNumber(cardNumber - 1);
  };

  const nextCard = () => {
    setCardNumber(cardNumber + 1);
  };

  return (
    <>
      <Swiper className={styles.cardContainer} spaceBetween={50}>
        {cards}
      </Swiper>
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
