import React from 'react';
import './App.css';
import Countdown from './components/CountDown';
import Heart from './components/Heart';
import banner from './assets/images/IMG_0833.jpeg';

function App() {
  return (
    <div className="App">
      <Heart size='250' text='D+M' iconClass='heart'/>
      <Countdown/>
    </div>
  );
}

export default App;
