import React from 'react';
import 'react-notifications-component/dist/theme.css'
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import ReactNotification from 'react-notifications-component'

import MenuBar from './components/MenuBar';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <div className="App">
      <Router>
        <ReactNotification />
        <MenuBar className='solid' slideIn={true}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </Router>
    </div>
  );
}

export default App;
