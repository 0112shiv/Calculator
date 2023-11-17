import React, { useState } from 'react';
import './App.css';
import Add from './components/Add';
import Subtract from './components/Subtract';
import Multiply from './components/Multiply';
import Divide from './components/Divide';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleInputChange = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };
  return (
    
    <div className="border"> 
   
    <div className="calculator">
    <section class="glow-demo">
        <div class="glow">
            <span>C</span><span>A</span><span>L</span><span>C</span>
            <span>U</span><span>L</span><span>A</span><span>T</span><span>O</span><span>R</span>       </div>
</section>
      <div className="display">
        <div className="input">{input}</div>
        <div className="output">{result}</div>
      </div>
    
       <div className="button">
        <Add onButtonClick={handleInputChange} />
        <Subtract onButtonClick={handleInputChange} />
        <Multiply onButtonClick={handleInputChange} />
        <Divide onButtonClick={handleInputChange} />
        
      </div>

      <div>
      <button onClick={handleClear} className="clear">
          CLEAR
        </button>
      </div>

      <div className="btn">
        <button onClick={() => handleInputChange('7')}>1</button>
        <button onClick={() => handleInputChange('8')}>2</button>
        <button onClick={() => handleInputChange('9')}>3</button>

        <button onClick={() => handleInputChange('4')}>4</button>
        <button onClick={() => handleInputChange('5')}>5</button>
        <button onClick={() => handleInputChange('6')}>6</button>

        <button onClick={() => handleInputChange('1')}>7</button>
        <button onClick={() => handleInputChange('2')}>8</button>
        <button onClick={() => handleInputChange('3')}>9</button>

        <button onClick={() => handleInputChange('0')}>0</button>
        <button onClick={() => handleInputChange('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
      </div>

    </div>
    </div>
  );
}

export default App;
