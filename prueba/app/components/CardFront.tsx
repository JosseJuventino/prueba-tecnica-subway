interface CardFrontProps {
    title: string;
}

export default function CardFront({ title } : CardFrontProps) {
    return(
        <div
            className="absolute w-full h-full bg-green-300 border-2 border-transparent rounded flex justify-center items-center cursor-pointer"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
            <p>{title}</p>
        </div>
    );
}