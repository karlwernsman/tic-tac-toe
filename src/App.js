import './App.css';
import Board from './component/board/Board.js';
import { useGameContext } from './context/GameContext.js';

function App() {
  const { gameMessage, handleResetClick } = useGameContext();
  return (
    <div className="App">
      <p className="message">{gameMessage}</p>
      <Board />
      <button onClick={handleResetClick}>Reset Game</button>
    </div>
  );
}

export default App;
