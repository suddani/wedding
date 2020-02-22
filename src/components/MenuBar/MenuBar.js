import React, {useState} from 'react';
import { store } from 'react-notifications-component';
import { withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import './MenuBar.css';
import Heart from '../Heart';
import FlowerText from '../FlowerText';
import Account from './Account';
import Entry from './Entry';
import useOnScroll from './../../hooks/useOnScroll';

import top_left_img from './top_left_v10.png';
import top_right_img from './top_right_v10.png';

function MenuBar({slideIn, className, t, user}) {
  const location = useLocation();
  const [flowerSize, setFlowerSize] = useState(200);
  const entries = [
    // {path: '/', name: t('Home'), hasNoHeart: true, hiddenOnClose: true},
    // {path: '/about', name: t('About'), hasNoHeart: true},
    // {path: '/galery', name: t('Gallery'), hasNoHeart: true},
    {path: '/story', name: t('The Story'), hasNoHeart: true},
    {path: '/wedding', name: t('The Wedding'), hasNoHeart: false},
    {path: '/', name: <FlowerText size={flowerSize} text="D+M"/>, hasNoHeart: true, hiddenOnOpen: true},
    {path: '/gifts', name: t('Gifts'), hasNoHeart: true},
    {path: '/tips', name: t('Local Tips'), hasNoHeart: false},
    // {path: '/account', name: <Account></Account>, disabledOnOpen: true }
  ];
  const styles = [
    'solid',
    'transparent'
  ];
  const [top, setTop] = useState(0);
  const [position, setPosition] = useState("relative");
  const [menuOpen, setMenuOpen] = useState("");
  useOnScroll(() => {
    if (!slideIn || window.innerWidth < 700) {
      setTop(0);
      setPosition("relative");
      setFlowerSize(200);
      return;
    };
    if (window.scrollY >= (125) && window.scrollY <= (125+50)) {
      setTop(-150);
    } else if (window.scrollY >= (125+50)) {
      setPosition("fixed");
      setFlowerSize(120);
      setTop(0);
    } else {
      setTop(0);
      setPosition("relative");
      setFlowerSize(200);
    }
  }, [position, slideIn]);

  function menuToggle() {
    if (window.innerWidth < 700)
      setMenuOpen(menuOpen === "open" ? "" : "open")
  }

  let extraStyleClass = '';
  let hasNoStyleIndicator = styles.map((style) => className.indexOf(style) !== -1).filter(i => i).length <= 0;
  if (hasNoStyleIndicator) extraStyleClass = styles[0];

  return (
    <nav className={['MenuBar', position, menuOpen, extraStyleClass, className].filter(i=>i).join(' ')} style={{top: top}}>
      <div className="top_left">
        <img src={top_left_img}></img>
      </div>
      <ul>
        {entries.map((entry, id) => {
          if (menuOpen === "open" && entry.hiddenOnOpen) return null;
          if (menuOpen !== "open" && entry.hiddenOnClose) return null;
          const entryDisabled = menuOpen !== "open" && entry.disabledOnOpen;
          return <Entry onClick={menuToggle} disabled={entryDisabled} key={id} hasNoHeart={entry.hasNoHeart} text={entry.name} path={entry.path} currentPath={location.pathname}/>
        })}
      </ul>
      <div className="top_right">
        <img src={top_right_img}></img>
      </div>
      {
        user ? 
        <Link to="/rsvp" className="rsvp">
          <div className="text">RSVP</div>
          <div className="left"></div>
          <div className="right"></div>
        </Link> : null
      }
    </nav>
  );
}

export default withTranslation("menu")(MenuBar);