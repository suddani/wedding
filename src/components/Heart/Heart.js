import React from 'react';

import heart from './heart.svg';

import './Heart.css';

export default function Heart(props) {
  const container = React.useRef(null);
  const [fontSize, setFontSize] = React.useState("16px");
  React.useLayoutEffect(() => {
    var cs = window.getComputedStyle(container.current);

    // var paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
    var paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);

    // var borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
    var borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);

    // Element width and height minus padding and border
    // let elementWidth = container.current.offsetWidth - paddingX - borderX;
    let elementHeight = container.current.offsetHeight - paddingY - borderY;

    setFontSize(`${elementHeight/5}px`);
  },[props.size]);
  return (
    <span className={[props.className, 'heartContainer'].join(' ')}
          ref={container}>
      <img width={props.size} src={heart} alt='heart' className={props.iconClass}/>
      <span style={{fontSize: fontSize}}>{props.text}</span>
    </span>
  );
}