import React, {useState} from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import { useViewportScroll } from 'framer-motion';

import './NavBar.css';

function NavBar({t}) {
  const location = useLocation();
  const history = useHistory();
  const entries = [
    {path: '/story', icon: 'explore', name: t('Story')},
    {path: '/wedding', icon: 'favorite', name: t('Wedding')},
    {path: '/', icon: 'home', name: t('Home')},
    {path: '/gallery', icon: 'card_giftcard', name: t('Gallery')},
    {path: '/tips', icon: 'thumb_up', name: t('Tips')},
  ];
  const scroll = useViewportScroll();

  return (
  <nav className="NavBar" style={{animation: scroll.scrollYProgress < 0.1 ? 'slide-in-bottom 1s forwards ease-out' : 'none'}}>
    {
      entries.map ((entry, index) => {
        return <Link key={index} replace={true} className={location.pathname == entry.path ? 'current' : ''} to={
          {
            pathname: entry.path,
            state: { icon: entry.icon, title: entry.name }
          }}>
          <i className="material-icons">{entry.icon}</i>
          <p>{entry.name}</p>
        </Link> 
      })
    }
  </nav>);
}

export default withTranslation("menu")(NavBar);