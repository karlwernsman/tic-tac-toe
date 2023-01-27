import './App.css';
import Board from './component/board/Board.js';
import { useGameContext } from './context/GameContext.js';

function App() {
  const { gameMessage } = useGameContext();
  return (
    <div>
      <p>{gameMessage}</p>
      <Board />
      <button>Reset Game</button>
    </div>
  );
}

export default App;
