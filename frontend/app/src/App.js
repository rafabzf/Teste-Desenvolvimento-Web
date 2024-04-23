import './App.css';
import React, { useState} from 'react';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const calculatePrimeNumbers = async () => {
    const response = await fetch('/primos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ number }),
    });
    const { result } = await response.json();
    setResult(result);
  }

  return (
    <div className="App">
      <h1>
        Calculadora de números primos
      </h1>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder='Digite um número'
      ></input>
      <button onClick={calculatePrimeNumbers}>Calcular</button>
      {result !== null && <p>Quantidade de números primos: {result}</p>}
    </div>
  );
};

export default App;
