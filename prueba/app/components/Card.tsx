import { CardProps } from "../types/Card";

export function Card({ title, id, finded, showCard } : CardProps) {
  

    return(
      <div key={id} className="flex flex-col justify-center items-center rounded-md bg-amber-200 h-52 border-2 hover:scale-105 transition-all cursor-pointer hover:border-gray-300 border-transparent">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    );
}