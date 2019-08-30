import React from 'react';
import './App.css';
import Countdown from './components/CountDown';

import banner from './assets/images/IMG_0833.jpeg';

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <span>
          <span>Home</span>
          <span>Pictures</span>
          <span>Location</span>
          <span>Contact</span>
        </span>
        <span>
          <span>Account</span>
          <span>Login</span>
        </span>
      </div>
      <div className="banner">
        <img src={banner}/>
      </div>
      <h1>
        Countdown: <Countdown/>
      </h1>
    </div>
  );
}

export default App;
