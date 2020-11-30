import React from 'react';
import './App.css';
import { Counter } from './components/Counter';

function App() {
  return (
    <div>
      <Counter maxValue={5} />
      <Counter step={1} />
      <Counter step={10} />
    </div>
  );
}

export default App;
