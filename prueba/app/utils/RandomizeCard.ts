import { CardProps } from "../types/Card"

export const randomizeCards = (doubleCards : CardProps[]) => {
    const randomizedCards = doubleCards.sort(() => Math.random() - 0.5)
    return randomizedCards;
}
