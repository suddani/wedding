import React from 'react';

import './FlowerText.scss';
import under_monogram from './under_monogram.png';

export default function FlowerText(props) {
  return (
    <span className={[props.className, 'flowerTextContainer'].join(' ')}>
      <img width={props.size} height={props.size} src={under_monogram} alt='heart' className={props.iconClass}/>
      <span style={{fontSize: `${props.size/4.5}px`}}>M & D</span>
    </span>
  );
}