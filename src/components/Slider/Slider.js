import React, {useRef} from 'react';
import useOnScroll from './../../hooks/useOnScroll'

import './Slider.css'
import banner from './../../assets/images/main.jpeg';

export default function Slider(props) {
  // const [top, setTop] = useState(0);
  const container = useRef();
  useOnScroll(() => {
    // setTop(window.scrollY/2);
    window.requestAnimationFrame(() => {
      container.current.style.top = (window.scrollY/2.0)+'px';
    })
  }, []);
  return (
    <section className='slider' style={{height: (props.height||625)+'px'}}>
      <ul>
        <li>
          <div ref={container} style={{backgroundImage: `url(${banner})`}}></div>
        </li>
      </ul>
      <div>{props.text}</div>
    </section>
  );
}
