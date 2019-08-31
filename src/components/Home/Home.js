import React, {useState} from 'react';
import useOnScroll from './../../hooks/useOnScroll'

import './Home.css'
import banner from './../../assets/images/IMG_0833.jpeg';

function Slider(props) {
  const [top, setTop] = useState(0);
  useOnScroll(() => {
    setTop(window.scrollY/2);
  }, []);
  return (
    <section className='slider' style={{height: (props.height||475)+'px'}}>
      <ul>
        <li>
          <div style={{backgroundImage: `url(${banner})`, top: top}}></div>
        </li>
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <section className="Home">
      <h1 style={{display: 'none'}}>Home</h1>
      <Slider/>
      <div style={{backgroundColor: 'blue', height: '100px'}}></div>
      <div style={{backgroundColor: 'green', height: '100px'}}></div>
      <div style={{backgroundColor: 'blue', height: '100px'}}></div>
      <div style={{backgroundColor: 'green', height: '100px'}}></div>
      <div style={{backgroundColor: 'blue', height: '100px'}}></div>
      <div style={{backgroundColor: 'green', height: '100px'}}></div>
      <div style={{backgroundColor: 'green', height: '100px'}}></div>
      <div style={{backgroundColor: 'blue', height: '100px'}}></div>
      <div style={{backgroundColor: 'green', height: '100px'}}></div>
      <div style={{backgroundColor: 'green', height: '100px'}}></div>
      <div style={{backgroundColor: 'blue', height: '100px'}}></div>
      <div style={{backgroundColor: 'green', height: '100px'}}></div>
      <div style={{backgroundColor: 'green', height: '100px'}}></div>
      <div style={{backgroundColor: 'blue', height: '100px'}}></div>
      <div style={{backgroundColor: 'green', height: '100px'}}></div>
      <div style={{backgroundColor: 'green', height: '100px'}}></div>
      <div style={{backgroundColor: 'blue', height: '100px'}}></div>
      <div style={{backgroundColor: 'green', height: '100px'}}></div>
    </section>
  );
}