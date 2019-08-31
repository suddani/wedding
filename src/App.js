import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MenuBar from './components/MenuBar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar slideIn={true} style={{gridColumn: '1/1', gridRow: '1/1'}}></MenuBar>
        <Route exact path="/" component={Home} style={{gridColumn: '1/1', gridRow: '1/1'}}/>
        <Route exact path="/about" component={About}/>
      </Router>
    </div>
  );
}

export default App;
