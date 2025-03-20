"use client"
import React from 'react';
import { useMemoryGameStore } from '../store/CardStore';
import { Card } from './Card';

export function GameBoard() {
  const { cards, moves, resetGame } = useMemoryGameStore((state) => state);
  const isGameOver = cards.every((card) => card.finded);

  console.log(cards);

  return (
    <div className="p-4 w-full">
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card key={card.uuid} {...card} />
        ))}
      </div>
      <div className="mt-4">
        <p>Moves: {moves}</p>
        {isGameOver && <p className="text-green-500">Game Over! You won!</p>}
        <button
          onClick={resetGame}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}
