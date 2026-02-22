import useGameStore from './store/useGameStore'

function App() {
  const { games, addGame } = useGameStore()

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-3xl font-bold mb-4">My GameLib Collection</h1>
      
      <div className="mb-6 p-4 bg-slate-800 rounded-lg">
        Amount of games: <span className="text-yellow-400 font-bold">{games.length}</span>
      </div>

      <button 
        onClick={() => addGame({ id: Date.now(), title: 'New Game' })}
        className="px-6 py-2 bg-green-600 rounded-lg hover:bg-green-500 transition"
      >
        Add game
      </button>

      <ul className="mt-4">
        {games.map(game => (
          <li key={game.id} className="text-gray-300">• {game.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App