"use client"
import { Card } from "./components/Card";
import { useCardStore } from "./store/CardStore";
import { randomizeCards } from "./utils/RandomizeCard";

export default function Home() {

  const cards = useCardStore((state) => state.cards)

  const doubleCards = cards.concat(cards)

  const randomized = randomizeCards(doubleCards)
  
  return (
    <div className="grid grid-cols-3 w-full gap-2">
      {randomized.map((card) => (
        <Card key={card.id} title={card.title} id={card.id} finded={card.finded} />
      ))}
    </div>
  );
}
