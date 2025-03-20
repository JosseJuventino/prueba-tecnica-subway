// src/App.tsx
import React from 'react';
import { GameBoard } from './components/CardsGameContainer';

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center py-4">Juego de memoria</h1>
      <div className="w-full flex justify-center">
      <GameBoard />
      </div>
    </div>
  );
}
