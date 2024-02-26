import { useState } from 'react';
import './App.css';

function App() {
  const [disabled, setDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState('medium-violet-red');
  const nextColor =
    buttonColor === 'medium-violet-red' ? 'midnight-blue' : 'medium-violet-red';
  const className = disabled ? 'gray' : buttonColor;

  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => setButtonColor(nextColor)}
        className={className}
      >
        change to {nextColor}
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
