import React, {useRef} from 'react';
import useOnScroll from './../../hooks/useOnScroll'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import './Slider.scss'

export default function Slider({className, fullscreen, fullscreenMobile, text, height, banner, banner_small}) {
  const biggerThan700 = useMediaQuery('(min-width:700px)');

  const container = useRef();
  const main = useRef();

  useOnScroll(() => {
    window.requestAnimationFrame(() => {
      const modifier = main.current.getBoundingClientRect().top;
      const scrollY = window.screenY;
      container.current.style.top = (scrollY-(modifier+scrollY))/2.0+'px';
    })
  }, []);
  return (
    <section ref={main} className={['slider', className, fullscreen ? 'full' : null, fullscreenMobile ? 'fullsmall' : null].filter(i=>i).join(' ')} style={{height: (height||625)+'px'}}>
      <ul>
        <li>
          <div ref={container} style={{backgroundImage: `url(${biggerThan700 ? banner : (banner_small || banner)})`}}></div>
        </li>
      </ul>
      <div>{text}</div>
      <span></span>
    </section>
  );
}
