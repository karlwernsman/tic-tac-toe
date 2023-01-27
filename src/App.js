import './App.css';
import Board from './component/board/Board.js';
import { useGameContext } from './context/GameContext.js';

function App() {
  const { gameMessage } = useGameContext();
  return (
    <div>
      <p>{gameMessage}</p>
      <Board />
    </div>
  );
}

export default App;
