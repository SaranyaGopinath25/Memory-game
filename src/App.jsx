import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import GameBoard from './components/GameBoard';
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter basename='/Memory-game'>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/:level' element={<GameBoard />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App
