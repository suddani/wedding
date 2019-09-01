import React, {useState} from 'react';
import useOnScroll from './../../hooks/useOnScroll'

import './Slider.css'
import banner from './../../assets/images/IMG_0833.jpeg';

export default function Slider(props) {
  const [top, setTop] = useState(0);
  useOnScroll(() => {
    setTop(window.scrollY/2);
  }, []);
  return (
    <section className='slider' style={{height: (props.height||625)+'px'}}>
      <ul>
        <li>
          <div style={{backgroundImage: `url(${banner})`, top: top}}></div>
        </li>
      </ul>
      <div>{props.text}</div>
    </section>
  );
}