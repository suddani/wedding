import React from 'react';
import 'react-notifications-component/dist/theme.css'
import './App.css';
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import ReactNotification from 'react-notifications-component';

import useLocalStorage from './hooks/useLocalStorage';

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
import Invite from './routes/Invite';
import Translations from './routes/Translations';
import NavBar from './components/NavBar';
import StatusBar from './components/StatusBar';

function PrivateRoute({ children, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App() {
  const [user, setUser] = useLocalStorage("user", null);

  return (
    <div className="App">
      <Router>
        <ReactNotification />
        <StatusBar></StatusBar>
        <MenuBar className='solid' slideIn={true} user={user}/>
        
        <Route exact path="/" component={Home2}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/story" component={Story}/>
        <Route exact path="/wedding" component={Wedding}/>
        <Route exact path="/tips" component={Tips}/>
        <Route exact path="/gifts" component={Gifts}/>
        <Route exact path="/home2" component={Home}/>
        <Route exact path="/invite">
          <Invite setUser={setUser}></Invite>
        </Route>
        <Route exact path="/translations" component={Translations}/>

        {/* Protected Routes */}
        <PrivateRoute exact path="/galery" user={user}>
          <Galery></Galery>
        </PrivateRoute>
        <PrivateRoute exact path="/account" user={user}>
          <Account></Account>
        </PrivateRoute>
        <PrivateRoute exact path="/rsvp" user={user}>
          <Rsvp user={user}></Rsvp>
        </PrivateRoute>

        <NavBar></NavBar>
        <FooterBar></FooterBar>
      </Router>
    </div>
  );
}

export default App;