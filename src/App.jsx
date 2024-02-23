import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const nextColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button onClick={() => setButtonColor(nextColor)} className={buttonColor}>
        change to {nextColor}
      </button>
    </div>
  );
}

export default App;
