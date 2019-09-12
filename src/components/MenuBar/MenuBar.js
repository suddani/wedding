import React, {useState} from 'react';
import { store } from 'react-notifications-component';
import { withTranslation } from 'react-i18next';

import './MenuBar.css';
import Heart from '../Heart';
import Account from './Account';
import Entry from './Entry';
import useOnScroll from './../../hooks/useOnScroll';

function MenuBar({slideIn, className, t}) {
  const entries = [
    {path: '/', name: t('Home'), hasNoHeart: true, hiddenOnClose: true},
    {path: '/about', name: t('About'), hasNoHeart: true},
    {path: '/galery', name: t('Gallery')},
    {path: '/story', name: t('The Story')},
    {path: '/', name: <Heart size={50} text="D+M"/>, hasNoHeart: true, hiddenOnOpen: true},
    {path: '/wedding', name: t('The Wedding'), hasNoHeart: true},
    {path: '/account', name: <Account></Account>, disabledOnOpen: true }
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
  }, [position, slideIn]);

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
  let hasNoStyleIndicator = styles.map((style) => className.indexOf(style) !== -1).filter(i => i).length <= 0;
  if (hasNoStyleIndicator) extraStyleClass = styles[0];

  return (
    <nav className={['MenuBar', position, menuOpen, extraStyleClass, className].filter(i=>i).join(' ')} style={{top: top}}>
      <div onClick={menuToggle}>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul>
        {entries.map((entry, id) => {
          if (menuOpen === "open" && entry.hiddenOnOpen) return null;
          if (menuOpen !== "open" && entry.hiddenOnClose) return null;
          const entryDisabled = menuOpen !== "open" && entry.disabledOnOpen;
          return <Entry onClick={menuToggle} disabled={entryDisabled} key={id} hasNoHeart={entry.hasNoHeart} text={entry.name} path={entry.path}/>
        })}
      </ul>
    </nav>
  );
}

export default withTranslation("menu")(MenuBar);