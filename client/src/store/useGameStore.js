import { create } from 'zustand'

const useGameStore = create((set) => ({
  games: [], // Here are going to be games
  isLoading: false,
  
  // Test function for adding game
  addGame: (game) => set((state) => ({ 
    games: [...state.games, game] 
  })),

  // Function for clearing List
  clearLibrary: () => set({ games: [] }),
}))

export default useGameStore