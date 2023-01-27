import { useState } from 'react';

const { useContext } = require('react');
const { createContext } = require('react');

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('x'); //'x' or 'o'
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']); //showcasing taken and open boxes
  const [active, setActive] = useState(true); //boolean
  const [gameMessage, setGameMessage] = useState('Your turn, X.'); //'Your turn __', 'You win __' or 'It's a cat's game!'

  const handleBoxClick = (index) => {
    if (!active) return;
    if (board[index] !== '') return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    let newPlayer = null;
    if (currentPlayer === 'x') {
      newPlayer = 'o';
    }
    if (currentPlayer === 'o') {
      newPlayer = 'x';
    }
    setCurrentPlayer(newPlayer);

    setGameMessage(`Your turn, ${newPlayer.toUpperCase()}.`);
  };

  const winConditions = () => {
    let newPlayer = null;
    if (currentPlayer === 'x') {
      newPlayer = 'o';
    }
    if (currentPlayer === 'o') {
      newPlayer = 'x';
    }
    //x wins
    if (board[0] === board[1] && board[1] === board[2] && board[2] === 'x') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }
    if (board[3] === board[4] && board[4] === board[5] && board[5] === 'x') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }
    if (board[6] === board[7] && board[7] === board[8] && board[8] === 'x') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }
    if (board[0] === board[3] && board[3] === board[6] && board[6] === 'x') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }
    if (board[1] === board[4] && board[4] === board[7] && board[7] === 'x') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }
    if (board[2] === board[5] && board[5] === board[8] && board[8] === 'x') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }
    if (board[0] === board[4] && board[4] === board[8] && board[8] === 'x') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }
    if (board[2] === board[4] && board[4] === board[6] && board[6] === 'x') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }

    //o wins
    if (board[0] === board[1] && board[1] === board[2] && board[2] === 'o') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }
    if (board[3] === board[4] && board[4] === board[5] && board[5] === 'o') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }
    if (board[6] === board[7] && board[7] === board[8] && board[8] === 'o') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }
    if (board[0] === board[3] && board[3] === board[6] && board[6] === 'o') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }
    if (board[1] === board[4] && board[4] === board[7] && board[7] === 'o') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }
    if (board[2] === board[5] && board[5] === board[8] && board[8] === 'o') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }
    if (board[0] === board[4] && board[4] === board[8] && board[8] === 'o') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }
    if (board[2] === board[4] && board[4] === board[6] && board[6] === 'o') {
      setActive(false);
      setGameMessage(`You win, ${newPlayer.toUpperCase()}!`);
    }
  };

  const tieConditions = () => {
    if (!board.includes('')) {
      setActive(false);
      setGameMessage(`It is a game of the cat.`);
    }
  };

  const checkGameStatus = () => {
    if (!active) return;
    tieConditions();
    winConditions();
  };

  checkGameStatus();

  const handleResetClick = () => {
    setCurrentPlayer('x');
    setActive(true);
    setGameMessage('Your turn, X.');
    setBoard(['', '', '', '', '', '', '', '', '']);
  };

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
        handleResetClick,
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
