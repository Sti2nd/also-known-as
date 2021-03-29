import "swiper/swiper.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import PlayCard, { ICard } from "../PlayCard/PlayCard";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./PlayView.module.css";
import { chunkArray } from "../tools";

export default function PlayView({ words }: ICard) {
  const NUM_WORDS_PER_CARD = 8;
  const [cardNumber, setCardNumber] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<any>();
  const cards = chunkArray(words, NUM_WORDS_PER_CARD)
    .filter((wordBatch) => wordBatch.length === NUM_WORDS_PER_CARD)
    .map((wordBatch, idx) => (
      <SwiperSlide className={styles.swiperContainer} key={idx}>
        <PlayCard key={idx} words={wordBatch} />
      </SwiperSlide>
    ));

  const goToCard = (index: number) => {
    swiperInstance.slideTo(index);
  };

  const previousCard = () => {
    if (!hasPrevious()) return;
    setCardNumber(cardNumber - 1);
    goToCard(cardNumber - 1);
  };

  const nextCard = () => {
    if (!hasNext()) return;
    setCardNumber(cardNumber + 1);
    goToCard(cardNumber + 1);
  };

  const hasPrevious = () => {
    return cardNumber !== 0;
  };

  const hasNext = () => {
    return cardNumber !== cards.length;
  };

  return (
    <>
      <Swiper
        className={styles.cardContainer}
        spaceBetween={50}
        onSwiper={setSwiperInstance}
        onActiveIndexChange={(change) => setCardNumber(change.activeIndex)}
      >
        {cards}
      </Swiper>
      <div className={styles.buttonContainer}>
        <Button disabled={!hasPrevious()} onClick={previousCard}>
          Forrige
        </Button>
        <Badge variant="secondary"><h5>{cardNumber}</h5></Badge>
        <Button disabled={!hasNext()} onClick={nextCard}>
          Neste
        </Button>
      </div>
    </>
  );
}
