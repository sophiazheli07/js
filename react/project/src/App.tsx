import React from 'react';
import { Counter } from './components/Counter';
import { Users } from './components/Users';


import './App.css';




function App() {
  return (
    <div className="App">
      
      <Counter value="VALUE"/>
      <Users />

    </div>
  );
}

export default App;

