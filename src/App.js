import React from 'react';
import 'react-notifications-component/dist/theme.css'
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import ReactNotification from 'react-notifications-component'

import MenuBar from './components/MenuBar';
import FooterBar from './components/FooterBar';
import Home from './routes/Home';
import Home2 from './routes/Home2';
import About from './routes/About';
import Galery from './routes/Galery';
import Story from './routes/Story';
import Wedding from './routes/Wedding';
import Account from './routes/Account';
import Rsvp from './routes/Rsvp';
import Tips from './routes/Tips';
import Gifts from './routes/Gifts';
import Translations from './routes/Translations';

function App() {
  return (
    <div className="App">
      <Router>
        <ReactNotification />
        <MenuBar className='solid' slideIn={true}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/galery" component={Galery}/>
        <Route exact path="/story" component={Story}/>
        <Route exact path="/wedding" component={Wedding}/>
        <Route exact path="/account" component={Account}/>
        <Route exact path="/rsvp" component={Rsvp}/>
        <Route exact path="/tips" component={Tips}/>
        <Route exact path="/gifts" component={Gifts}/>
        <Route exact path="/home2" component={Home2}/>
        <Route exact path="/translations" component={Translations}/>
        <FooterBar></FooterBar>
      </Router>
    </div>
  );
}

export default App;