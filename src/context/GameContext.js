import { useState } from 'react';

const { useContext } = require('react');
const { createContext } = require('react');

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('x'); //'x' or 'o'
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']); //showcasing taken and open boxes
  const [active, setActive] = useState(true); //boolean
  const [gameMessage, setGameMessage] = useState('Your turn, x.'); //'Your turn __', 'You win __' or 'It's a cat's game!'

  const handleBoxClick = (index) => {
    if (!active) return;
    if (board[index] !== '') return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (currentPlayer === 'x') setCurrentPlayer('o');
    if (currentPlayer === 'o') setCurrentPlayer('x');

    setGameMessage(`Your turn, ${currentPlayer}.`);
  };

  const checkGameState = () => {};

  const winConditions = () => {};

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
        handleBoxClick,
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

export { GameProvider, useGameContext };
