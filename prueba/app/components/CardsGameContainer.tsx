"use client"

import { useMemoryGameStore } from '../store/CardStore';
import { Card } from './CardContainer';

export function GameBoard() {
  const { cards, moves, resetGame } = useMemoryGameStore((state) => state);
  const isGameOver = cards.every((card) => card.finded);
 

  return (
    <div className="p-4 w-full">
      <canvas id="my-canvas"></canvas>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card key={card.uuid} {...card} />
        ))}
      </div>
      <div className="mt-4 flex flex-col justify-center">
        <p className='text-center'>Moves: <span className='font-bold text-green-500'>{moves}</span></p>
        
        <div className='flex flex-row justify-center'>
        <button
          onClick={resetGame}
          className="mt-4 font-bold bg-green-400 px-4 py-2 rounded cursor-pointer text-white"
        >
          Restart Game
        </button>

        </div>
        {isGameOver && <p className='bg-white text-center text-2xl'>Felicidades haz ganado el juego</p>}
      </div>
    </div>
  );
}
