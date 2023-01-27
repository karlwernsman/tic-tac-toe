import { useState } from 'react';

const { useContext } = require('react');
const { createContext } = require('react');

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('x'); //'x' or 'o'
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']); //showcasing taken and open boxes
  const [active, setActive] = useState(true); //boolean
  const [gameMessage, setGameMessage] = useState('Your turn, X.'); //'Your turn __', 'You win __' or 'It's a cat's game!'

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        board,
        setBoard,
        active,
        setActive,
        gameMessage,
        setGameMessage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

const handleBoxClick = () => {
  console.log('Clicked a box!');
};

export { GameProvider, useGameContext, handleBoxClick };
