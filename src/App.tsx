import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="flex gap-8 mb-6">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="w-24 h-24 transition-transform hover:scale-110" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="w-24 h-24 transition-transform hover:scale-110" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-primary mb-4">Vite + React</h1>
      <div className="card w-96 bg-base-100 shadow-xl mb-6">
        <div className="card-body items-center text-center">
          <button
            className="btn btn-primary mb-4"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p>
            Edit <code className="bg-base-200 rounded px-1">src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
      <p className="text-base-content opacity-70">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
