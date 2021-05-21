import './App.css';
import React, {useState} from "react";
import {useForm} from "./useForm";
// import { useEffect } from 'react';
import {Hello} from "./hello";

function App() {
  const [number, setNumber] = useState(50);
  const [number2, setNumber2] = useState(70);
  const [values, handleChange] = useForm({email: '', password: ''});

  const [showHello, setShowHello] =  useState(true);

  // useEffect( () => {
  //   console.log('render')
  // },[values.password]);

  //console.logs once when it mounts

  // useEffect(() => {
  //   console.log('render')
  //   return  () => {
  //     console.log('unmount')
  //   };
  // }, []);

  return (
    <div>
      <button onClick={() => setShowHello(!showHello)}>
        Toggle
      </button>
      {showHello && <Hello />}
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
      <div>
        <input name="email" value={values.email} onChange={handleChange} />
        <input name="password" value={values.password} onChange={handleChange} />
      </div>

    </div>
 );
}

export default App;
