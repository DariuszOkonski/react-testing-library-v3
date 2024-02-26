import { useState } from 'react';
import './App.css';
import { kebabCaseToTitleCase } from './helpers';

function App() {
  const [disabled, setDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState('medium-violet-red');
  const nextColorClass =
    buttonColor === 'medium-violet-red' ? 'midnight-blue' : 'medium-violet-red';
  const nextColorTitleCase = kebabCaseToTitleCase(nextColorClass);
  const className = disabled ? 'gray' : buttonColor;

  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => setButtonColor(nextColorClass)}
        className={className}
      >
        change to {nextColorTitleCase}
      </button>
      <br />

      <label htmlFor='disable-button-checkbox'>disable button</label>
      <input
        type='checkbox'
        name=''
        id='disable-button-checkbox'
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
