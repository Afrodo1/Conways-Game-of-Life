import React from 'react';
import './App.css';
import Game from './game/game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Conway's Game of Life</h1>
      <Game/>
      </header>
    </div>
  );
}

export default App;
