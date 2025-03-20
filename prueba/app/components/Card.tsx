import React from 'react';
import { useMemoryGameStore } from '../store/CardStore';
import { CardProps } from '../types/Card';

export function Card({ title, finded, uuid }: CardProps) {
  const flipCard = useMemoryGameStore((state) => state.flipCard);
  const flippedCards = useMemoryGameStore((state) => state.flippedCards);
  const isFlipped = flippedCards.some((card) => card.uuid === uuid) || finded;
  return (
    <div className="flex justify-center items-center">
      <div
        className={`bg-gray-200 h-32 w-32 flex justify-center items-center cursor-pointer ${
          isFlipped ? 'bg-green-300' : 'bg-gray-300'
        }`}
        onClick={() => flipCard(uuid  || '')}
      >
        {isFlipped ? <p>{title}</p> : <p>?</p>}
      </div>
    </div>
  );
}