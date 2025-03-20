export default function CardBack() {
    return (
        <div
            className="absolute w-full h-full transparent  rounded flex justify-center items-center cursor-pointer hover:scale-105  transition-all"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <img src="/logo.png" alt="" />
          </div>
    )
}