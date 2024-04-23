import './App.css';
import React, { useState} from 'react';

function App() {
  const [num, setNum] = useState('');
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <h1>
        Calculadora de números primos
      </h1>
      <input
        type='number'
        value={'...'}
        onChange={(e) => setNum(e.target.value)}
        placeholder='Digite um número'
      ></input>
      <button onClick={'...'}>Calcular</button>
    </div>
  );
}

export default App;
