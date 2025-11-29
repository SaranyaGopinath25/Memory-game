import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div className='container'>
        <header>
        <h1>Memory Master!!</h1>
        <p>Test your memory skills!</p>
        </header>
        <div className='levels'>

        <Link to='/game/easy' style={{ textDecoration: "none", color: "inherit" }}>
            <div className='easy'>
                <h3>Easy</h3>
                <p style={{fontSize : "14px"}}>3x4 Grid - 6 Pairs - Perfect for Beginners</p>
            </div>
        </Link>
        <Link to='/game/medium' style={{ textDecoration: "none", color: "inherit" }}>
            <div className='medium'>
                <h3>Medium</h3>
                <p style={{fontSize : "14px"}}>4x4 Grid - 8 Pairs - Balanced Challenge</p>
            </div>
        </Link>
        <Link to='/game/hard' style={{ textDecoration: "none", color: "inherit" }}>
            <div className='hard'>
                <h3>Hard</h3>
                <p style={{fontSize : "14px"}}>5x4 Grid - 10 Pairs - Expert Level</p>
            </div>
        </Link>
        </div>

        <footer>
            <p>Choose your difficulty level!</p>

        </footer>
    </div>
  )
}

export default Home