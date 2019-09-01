import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

import MenuBar from './components/MenuBar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar slideIn={true}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </Router>
    </div>
  );
}

export default App;
