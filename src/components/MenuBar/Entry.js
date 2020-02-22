import React from 'react';
import { Link } from "react-router-dom";
import Heart from '../Heart';

function Entry({text, path, hasNoHeart, onClick, disabled, currentPath}) {
  let extraHeart = hasNoHeart ? null : <Heart size="8"/>;
  return (
    <li>
      { extraHeart }
      { path && !disabled ? <Link className={currentPath == path ? 'current' : ''} to={path} onClick={onClick}>{text}</Link> : text }
    </li>
  );
}

export default Entry;