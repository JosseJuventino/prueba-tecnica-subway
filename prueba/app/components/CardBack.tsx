export default function CardBack() {
    return (
        <div
            className="absolute w-full h-full bg-gray-300 border-2 border-transparent rounded flex justify-center items-center cursor-pointer hover:scale-105 hover:border-gray-400 transition-all"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <p>?</p>
          </div>
    )
}