import React from 'react';
import { useMemoryGameStore } from '../store/CardStore';
import { CardProps } from '../types/Card';
import CardBack from './CardBack';
import CardFront from './CardFront';

export function Card({ title, finded, uuid }: CardProps) {
  const flipCard = useMemoryGameStore((state) => state.flipCard);
  const flippedCards = useMemoryGameStore((state) => state.flippedCards);
  const isFlipped = flippedCards.some((card) => card.uuid === uuid) || finded;

  return (
    <div className="flex justify-center items-center">
      <div
        style={{ perspective: '1000px' }}
        className="h-32 w-32"
        onClick={() => flipCard(uuid || '')}
      >
        <div
            className="relative w-full h-full transition-transform duration-500"
            style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)', transformStyle: 'preserve-3d' }}
        >
          <CardFront title={title} />

          <CardBack />
        </div>
      </div>
    </div>
  );
}