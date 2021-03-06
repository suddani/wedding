import React from 'react';

import heart from './heart.svg';

import './Heart.scss';

export default function Heart(props) {
  const container = React.useRef(null);
  // const [fontSize, setFontSize] = React.useState("16px");
  // React.useEffect(() => {
  //   var cs = window.getComputedStyle(container.current);

  //   // var paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
  //   var paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);

  //   // var borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
  //   var borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);

  //   // Element width and height minus padding and border
  //   // let elementWidth = container.current.offsetWidth - paddingX - borderX;
  //   let elementHeight = container.current.offsetHeight - paddingY - borderY;

  //   setFontSize(`${elementHeight/3.5}px`);
  // },[props.size]);
  let text = null;
  if (props.text) {
    text = <span style={{fontSize: `${props.size/3.5}px`}}>{props.text}</span>;
  }
  return (
    <span className={[props.className, 'heartContainer'].join(' ')}
          ref={container}>
      <img width={props.size} height={props.size} src={heart} alt='heart' className={props.iconClass}/>
      {text}
    </span>
  );
}