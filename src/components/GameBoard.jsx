import React, { useState, useEffect } from 'react';
import Card from './Card';

// Import all card images
import butterfly from '../assets/cardImages/butterfly.png';
import dove from '../assets/cardImages/dove.png';
import dragon from '../assets/cardImages/dragon.png';
import flamingo from '../assets/cardImages/flamingo.png';
import ladybug from '../assets/cardImages/ladybug.png';
import peacock from '../assets/cardImages/peacock.png';
import penguin from '../assets/cardImages/penguin.png';
import phoenix from '../assets/cardImages/phoenix.png';
import toucan from '../assets/cardImages/toucan.png';
import unicorn from '../assets/cardImages/unicorn.png';

const GameBoard = () => {
  const cardImages = [
    butterfly,
    dove,
    dragon,
    flamingo,
    ladybug,
    peacock,
    penguin,
    phoenix,
    toucan,
    unicorn
  ];

  // Create pairs of cards
  const createBoard = () => {
    const pairs = [...cardImages, ...cardImages];
    return pairs.map((image, index) => ({
      id: index,
      image: image,
      isFlipped: false,
      isMatched: false
    })).sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(createBoard());
  }, []);

  const handleCardClick = (cardId) => {
  
    const newCards = cards.map(card => {
      if (card.id === cardId) {
        return { ...card, isFlipped: true };
      }
      return card;
    });

    setCards(newCards);
    setFlippedCards([...flippedCards, newCards.find(card => card.id === cardId)]);
  
  };

  return ( 
    <div className='Cards'>
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          isFlipped={card.isFlipped}
          image={card.image}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default GameBoard;