import React from 'react';
import 'react-notifications-component/dist/theme.css'
import './App.scss';
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import ReactNotification from 'react-notifications-component';

import useLocalStorage from './hooks/useLocalStorage';

import MenuBar from './components/MenuBar';
import FooterBar from './components/FooterBar';
import Home from './routes/Home';
import Gallery from './routes/Gallery';
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
import ScrollToTop from './components/ScrollToTop';
import Login from './routes/Login';
import PrivateRoute from './components/PrivateRoute';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { palette } from './styles/colors';

const themeName = 'So Gold';

const theme = createMuiTheme({ palette, themeName });

function App() {
  const [user, setUser] = useLocalStorage("user", null);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <ScrollToTop></ScrollToTop>
          <ReactNotification />
          <StatusBar user={user}></StatusBar>
          <MenuBar className='solid' slideIn={true} user={user}/>

          <Route exact path="/" component={Home}/>
          <Route exact path="/login">
            <Login user={user} setUser={setUser}></Login>
          </Route>
          <Route exact path="/story" component={Story}/>
          <Route exact path="/wedding" component={Wedding}/>
          <Route exact path="/tips" component={Tips}/>
          <Route exact path="/gifts" component={Gifts}/>
          <Route exact path="/invite">
            <Invite setUser={setUser}></Invite>
          </Route>
          <Route exact path="/translations" component={Translations}/>

          {/* Protected Routes */}
          <PrivateRoute exact path="/gallery" user={user}>
            <Gallery user={user}></Gallery>
          </PrivateRoute>
          <PrivateRoute exact path="/account" user={user}>
            <Account user={user} setUser={setUser}></Account>
          </PrivateRoute>
          <PrivateRoute exact path="/rsvp" user={user}>
            <Rsvp user={user}></Rsvp>
          </PrivateRoute>

          <NavBar user={user}></NavBar>
          <FooterBar></FooterBar>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;