import React, {useRef} from 'react';
import useOnScroll from './../../hooks/useOnScroll'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import './Slider.css'
import banner from './../../assets/images/main.jpeg';
import banner_small from './../../assets/images/main_small.jpeg';

export default function Slider(props) {
  const biggerThan700 = useMediaQuery('(min-width:700px)');
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
          <div ref={container} style={{backgroundImage: `url(${biggerThan700 ? banner : banner_small})`}}></div>
        </li>
      </ul>
      <div>{props.text}</div>
    </section>
  );
}
