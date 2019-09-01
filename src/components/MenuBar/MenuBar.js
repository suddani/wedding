import React, {useState} from 'react';
import { Link } from "react-router-dom";


import './MenuBar.css';
import Heart from '../Heart';
import useOnScroll from '../../hooks/useOnScroll';

function Entry({text, path, hasNoHeart, onClick}) {
  let extraHeart = hasNoHeart ? null : <Heart size="8"/>;
  return (
    <li>{extraHeart}<Link to={path} onClick={onClick}>{text}</Link></li>
  );
}

export default function MenuBar(props) {
  let entries = [
    {path: '/', name: 'Home', hasNoHeart: true},
    {path: '/about', name: 'About'},
    {path: '/galery', name: 'Gallery'},
    {path: '/', name: <Heart size="50" text="D+M"/>, hasNoHeart: true},
    {path: '/story', name: 'The Story', hasNoHeart: true},
    {path: '/wedding', name: 'The Wedding'}
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
  }, [position, window.scrollY, props.slideIn, window.innerWidth]);

  function menuToggle() {
    if (window.innerWidth < 700)
      setMenuOpen(menuOpen === "open" ? "" : "open")
  }

  return (
    <nav className={['MenuBar', position, menuOpen].join(' ')} style={{top: top}}>
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