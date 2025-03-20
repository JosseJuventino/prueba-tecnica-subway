import { create } from 'zustand'
import { CardProps } from '../types/Card'

interface CardStore {
    cards: CardProps[]
    addCard: (card: CardProps) => void
}

const defaultCards: CardProps[] = [
    { id: 1, title: 'Card 1', finded: false, showCard: false},
    { id: 2, title: 'Card 2', finded: false, showCard: false},
]

export const useCardStore = create<CardStore>((set) => ({
    cards: defaultCards,
    addCard: (card) => set((state) => ({ cards: [...state.cards, card] })),
}))

export const addFindedCard = (id: number) => {
    useCardStore.setState((state) => {
        const cardIndex = state.cards.findIndex((card) => card.id === id);
        const updatedCards = [...state.cards];
        if (cardIndex !== -1) {
            updatedCards[cardIndex] = { ...updatedCards[cardIndex], finded: true };
        }
        return { cards: updatedCards };
    });
}



