export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <img src="/Blossom-reduccion-negativo.png" alt="Blossom" height="44" />
        <button className="px-4 py-2 border-2 border-white bg-transparent text-white text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
          Reservar una mesa
        </button>
      </div>
    </header>
  )
}
