import logo from './logo.svg';
import './App.css';
import './Board.css';
import { Board } from './Board.js';
import { useState } from 'react';
import io from 'socket.io-client';

const socket = io();

function App() {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null])
  
  function onClickSquare(square_index) {
    const newBoard = board.map((letter, index) => {
      if (index === square_index) {
          socket.emit('move', square_index);
          return 'X'
      }
      else
        return letter
    });
    
    setBoard(newBoard);
  }
  
  return (
    <div class="board">
      <Board onClick={onClickSquare} board={board} />
    </div>
  );
}

export default App;
