import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleOperation = (operation) => {
    switch (operation) {
      case 'sumar':
        setResult(num1 + num2);
        break;
      case 'restar':
        setResult(num1 - num2);
        break;
      case 'multiplicar':
        setResult(num1 * num2);
        break;
      case 'dividir':
        setResult(num1 / num2);
        break;
      default:
        setResult(0);
    }
  };

  return (
    <div className="envoltura">
      <h2>Calculadora</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      <div>
        <button onClick={() => handleOperation('sumar')}>Sumar</button>
        <button onClick={() => handleOperation('restar')}>Restar</button>
        <button onClick={() => handleOperation('multiplicar')}>Multiplicar</button>
        <button onClick={() => handleOperation('dividir')}>Dividir</button>
      </div>
      <p>Resultado: {result}</p>
    </div>
  );
};

export default Calculator;