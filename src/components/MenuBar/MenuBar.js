import React, {useState} from 'react';
import { Link } from "react-router-dom";


import './MenuBar.css';
import Heart from '../Heart';
import useOnScroll from '../../hooks/useOnScroll';

function Entry({text, path, hasNoHeart}) {
  let extraHeart = hasNoHeart ? null : <Heart size="8"/>;
  return (
    <li>{extraHeart}<Link to={path}>{text}</Link></li>
  );
}

export default function MenuBar(props) {
  let entries = [
    {path: '/', name: 'Home'},
    {path: '/about', name: 'About'},
    {path: '/galery', name: 'Gallery'},
    {path: '/', name: <Heart size="50" text="D+M"/>, hasNoHeart: true},
    {path: '/story', name: 'The Story'},
    {path: '/wedding', name: 'The Wedding'}
  ];
  const [top, setTop] = useState(0);
  const [position, setPosition] = useState("relative");
  useOnScroll(() => {
    if (!props.slideIn) {
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
      setTop(window.scrollY/2);
      setPosition("relative");
    }
  }, [position, window.scrollY, props.slideIn]);

  return (
    <nav className={['MenuBar', position].join(' ')} style={{top: top, position: position}}>
      <ul>
        {entries.map((entry, id) => <Entry key={id} hasNoHeart={entry.hasNoHeart} text={entry.name} path={entry.path}/>)}
      </ul>
    </nav>
  );
}