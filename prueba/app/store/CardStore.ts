import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface Card {
  id: number;
  title: string;
  uuid: string;
  finded: boolean;
  showCard: boolean;
}

interface GameStore {
  cards: Card[];
  flippedCards: Card[];
  moves: number;
  resetGame: () => void;
  flipCard: (cardId: string) => void;
}

const defaultCards: Card[] = [
  { id: 1, title: "Card 1", uuid: "", finded: false, showCard: false },
  { id: 2, title: "Card 2", uuid: "", finded: false, showCard: false },
  { id: 3, title: "Card 3", uuid: "", finded: false, showCard: false },
  { id: 4, title: "Card 4", uuid: "", finded: false, showCard: false },
];

const doubleCards = [...defaultCards, ...defaultCards];

const randomCards = (cards: Card[]) => cards.sort(() => Math.random() - 0.5);

export const useMemoryGameStore = create<GameStore>((set) => ({
  cards: randomCards(doubleCards).map((card) => ({
    ...card,
    uuid: uuidv4(),
  })),

  flippedCards: [],

  moves: 0,

  resetGame: () =>
    set({
      cards: randomCards(doubleCards).map((card) => ({
        ...card,
        uuid: uuidv4(),
        finded: false,
        showCard: false,
      })),
      flippedCards: [],
      moves: 0,
    }),

  flipCard: (cardId: string) => {
    set((state) => {
      const { cards, flippedCards, moves } = state;
      const cardIndex = cards.findIndex((card) => card.uuid === cardId);
      const flippedCard = cards[cardIndex];

      if (flippedCard.finded || flippedCards.length === 2) return state;

      const newFlippedCards = [...flippedCards, flippedCard];

      if (newFlippedCards.length === 2) {
        if (newFlippedCards[0].id === newFlippedCards[1].id) {
          const updatedCards = cards.map((card) =>
            card.title === newFlippedCards[0].title
              ? { ...card, finded: true }
              : card
          );

          set({ cards: updatedCards });
        }

        setTimeout(() => {
          set({ flippedCards: [] });
        }, 1000);
      }

      return {
        flippedCards: newFlippedCards,
        moves: moves + 1,
      };
    });
  },
}));
