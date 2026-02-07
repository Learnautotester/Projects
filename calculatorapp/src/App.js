import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // Step 1: Store what user clicks
  const [input, setInput] = useState("");
  // Step 3: Store result
  const [result, setResult] = useState("");
  // Step 1: Add value to input when button is clicked
  const handleClick = (value) => {
    setInput((prev) => prev + value)
  }

  // Step 2: Clear everything
  const handleClear = () => {
    setInput("");
    setResult("");
  };
  // Step 3: Calculate result
  const handleEqual = () => {
    if (input === "") {
      setResult("Error");
      return;
    }


    try {
      // eslint-disable-next-line no-eval
      const output = eval(input);
      setResult(output.toString());
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>


      {/* Input Field */}
      <input
        type="text"
        className="calculator-input"
        value={input}
        readOnly
      />
        {/* Result Display (Single Div) */}
      <div className="result-display">{result}</div>

      {/* Buttons */}
      <div className="button-grid">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>


        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>


        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>


        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>


      
    </div>
  );
}

export default App;
