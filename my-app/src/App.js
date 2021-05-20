import './App.css';
import React, {useState} from "react";

function App() {
  const [number, setNumber] = useState(50);
  const [number2, setNumber2] = useState(70);

  return (
    <div>
      <button onClick = {() => {
        setNumber(n => n+1)
        setNumber2(n => n+2)
      }}>

      Add
      </button>

      <div>
        number: {number}
      </div>
      <div>
        number2: {number2}
      </div>

    </div>
 );
}

export default App;
