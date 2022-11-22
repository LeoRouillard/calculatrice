import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Calculatrice() {

  let listButton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let [formule, setFormule] = useState('');
  // let [res, setRes] = useState(0)

  let calculate = () => {
    
  }

  return <div id='main'>
    <div id='screen'>
      { formule }
    </div>
    <div id='numbers'>
      {listButton.map(n => <button onClick={ () => setFormule(formule+n) }>{n}</button>)}
    </div>
    <div id='operations'>
      <button onClick={ () => setFormule(formule+'+') }>+</button>
      <button onClick={ () => setFormule(formule+'-') }>-</button>
      <button onClick={ () => setFormule(formule+'/') }>/</button>
      <button onClick={ () => setFormule(formule+'*') }>*</button>
    </div>
    <div id='bouton'>
      <button onClick={ () => calculate()}>=</button>
      <button onClick={ () => setFormule('')}>C</button>
    </div>
  </div>
}

function App() {
  return (
    <div className="App">
      <Calculatrice />
    </div>
  );
}

export default App;
