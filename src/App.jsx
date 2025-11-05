import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameBoard from './components/GameBoard.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';

function App() {

  return (
    <div className="container">
      <h1>Hello Memory Game!!</h1>
      <GameBoard />
      <ScoreBoard />
    </div>
  )
}

export default App
