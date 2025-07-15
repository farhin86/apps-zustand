// import { useState } from 'react'
import { create } from 'zustand'
import './App.css'

const useStore = create((set)=>({
  population: 0,
  increasePopulation: () => set((state) => ({population: state.population + 1})),
  decreasePopulation: () => set((state) => ({population: state.population - 1})),
  removeAll: () => set({population: 0})
}))

function App() {
  // const [count, setCount] = useState(0)
  const count = useStore(state => state.population);
  const {inc, dec} = useStore(state => ({inc: state.increasePopulation, dec: state.decreasePopulation}));
  // const decreasePopulation = useStore(state => state.decreasePopulation);
  return (
    <>
      <h1>Vite + React + Zustand</h1>
      <div className="card">
        <button onClick={inc}>
          Increase Population count by 1
        </button>
        <p className='count'>
          {count}
        </p>
        <button onClick={inc}>
          Decrease Population count by 1
        </button>
      </div>
    </>
  )
}

export default App
