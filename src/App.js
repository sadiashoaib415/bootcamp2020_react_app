import React from 'react';
import './App.css';
import Hello from './Hello';
import './Hello.css'

function App({name, age}) {
  return (
    <div align ="center">
      <h1 className="myname2">Hello World</h1>
      <h2 className="myname2">Creating my first React-based Web Page App</h2>
        <p className="myname1"> Written in App.js
        <br/>My name is <strong>{name} </strong> <br/> My age is <strong>{age-10}</strong>
        </p>
      <br/>
      <Hello firstName={name}></Hello>
    </div>
  );
}

export default App;
