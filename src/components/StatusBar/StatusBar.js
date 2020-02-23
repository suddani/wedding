import React, {useState} from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from '@material-ui/core';

import './StatusBar.scss';

function cap(path) {
  return path[0].toUpperCase() + path.slice(1); 
}

function namify(t, path) {
  if (path == null || path == "/") return t('Home')
  return t(path.split('/')[1].split(/[_-]/).map(s => cap(s)).join(' '))
}

function StatusBar({t, user}) {
  const location = useLocation();
  const history = useHistory();


  const title = location.state?.title || namify(t, location.pathname);

  return (
  <div className="StatusBar">
    {/* <i className="material-icons">home</i> */}
    <h1><Link replace={true} to="/">M&D</Link></h1>
    {user ? <Button variant="outlined">
      <Link replace={true} to={
          {
            pathname: "/rsvp",
            state: { icon: "receipt", title: "R.S.V.P" }
          }}>RSVP
      </Link>
    </Button> : null }
  </div>);
}

export default withTranslation("menu")(StatusBar);