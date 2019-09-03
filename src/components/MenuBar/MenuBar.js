import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { store } from 'react-notifications-component';
import {AccountCircle} from '@material-ui/icons';
import { Button, Input, Card, CardContent, Grid, Icon } from '@material-ui/core';

import './MenuBar.css';
import Heart from '../Heart';
import useOnScroll from './../../hooks/useOnScroll';

function Entry({text, path, hasNoHeart, onClick}) {
  let extraHeart = hasNoHeart ? null : <Heart size="8"/>;
  return (
    <li>
      { extraHeart }
      { path ? <Link to={path} onClick={onClick}>{text}</Link> : text }
    </li>
  );
}
function Login(props) {
  return (
    <Card>
      <CardContent>
        <Grid container direction="column" spacing={2} justify='center' alignContent='center'>
          <Grid item>Login</Grid>
            <Grid item><Input name="username" type="username"></Input></Grid>
            <Grid item><Input name="password" type="password"></Input></Grid>
            <Grid item ><Button variant="contained">Login</Button></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function Account(props) {
  return <span className="AccountButton">
    Account
    <Login/>
  </span>
}

export default function MenuBar(props) {
  let entries = [
    {path: '/about', name: 'About', hasNoHeart: true},
    {path: '/galery', name: 'Gallery'},
    {path: '/story', name: 'The Story', hasNoHeart: true},
    {path: '/', name: <Heart size={50} text="D+M"/>, hasNoHeart: true},
    {path: '/wedding', name: 'The Wedding'},
    {path: null, name: <Account></Account> }
  ];
  let styles = [
    'solid',
    'transparent'
  ];
  const [top, setTop] = useState(0);
  const [position, setPosition] = useState("relative");
  const [menuOpen, setMenuOpen] = useState("");
  useOnScroll(() => {
    if (!props.slideIn || window.innerWidth < 700) {
      setTop(0);
      setPosition("relative");
      return;
    };
    if (window.scrollY >= (625) && window.scrollY <= (625+50)) {
      setTop(-150);
    } else if (window.scrollY >= (625+50)) {
      setPosition("fixed");
      setTop(0);
    } else {
      setTop(0);
      setPosition("relative");
    }
  }, [position, props.slideIn]);

  function menuToggle() {
    // store.addNotification({
    //   title: "Wonderful!",
    //   message: "teodosii@react-notifications-component",
    //   type: "default",
    //   insert: "top",
    //   container: "top-right",
    //   animationIn: ["animated", "fadeIn"],
    //   animationOut: ["animated", "fadeOut"],
    //   dismiss: {
    //     duration: 5000,
    //     // onScreen: true
    //   }
    // });
    if (window.innerWidth < 700)
      setMenuOpen(menuOpen === "open" ? "" : "open")
  }

  let extraStyleClass = '';
  let hasNoStyleIndicator = styles.map((style) => props.className.indexOf(style) != -1).filter(i => i).length <= 0;
  if (hasNoStyleIndicator) extraStyleClass = styles[0];

  return (
    <nav className={['MenuBar', position, menuOpen, extraStyleClass, props.className].filter(i=>i).join(' ')} style={{top: top}}>
      <div onClick={menuToggle}>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul>
        {entries.map((entry, id) => {
          if (menuOpen === "open" && id === 3) return null
          return <Entry onClick={menuToggle} key={id} hasNoHeart={entry.hasNoHeart} text={entry.name} path={entry.path}/>
        })}
      </ul>
    </nav>
  );
}