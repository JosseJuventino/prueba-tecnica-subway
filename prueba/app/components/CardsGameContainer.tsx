"use client"

import { useEffect, useState } from 'react';
import { useMemoryGameStore } from '../store/CardStore';
import { Card } from './CardContainer';

export function GameBoard() {
  const { cards, moves, resetGame } = useMemoryGameStore((state) => state);
  const isGameOver = cards.every((card) => card.finded);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isGameOver) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGameOver]);

  const handleReset = () => {
    resetGame();
    setTimer(0);
  };

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  return (
    <div className="p-4 w-full">
      <div className='text-white text-center bg-green-700 p-2 mb-3 font-bold rounded'>
        Tiempo: {formattedTime}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card key={card.uuid} {...card} />
        ))}
      </div>
      <div className="mt-4 flex flex-col justify-center">
        <p className='text-center'>Movimientos: <span className='font-bold text-green-500'>{moves}</span></p>
        <div className='flex flex-row justify-center'>
          <button
            onClick={handleReset}
            className="mt-4 font-bold bg-green-700 px-4 py-2 rounded cursor-pointer text-white"
          >
            Reiniciar juego
          </button>
        </div>
        {isGameOver && <p className='text-center text-xl pt-4'>Felicidades haz ganado el juego</p>}
      </div>
    </div>
  );
}
