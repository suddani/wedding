import React, {useState} from 'react';
import CountDown from './../CountDown';
import Slider from './../Slider';
import HappyCouple from './../HappyCouple';

import './Home.css'
import banner from './../../assets/images/IMG_0833.jpeg';

export default function Home() {
  const sliderText = (<div className="saveTheDate">
    <div>Save</div>
    <div>The Date</div>
    <div>-<CountDown></CountDown>-</div>
  </div>);

  return (
    <section className="Home">
      <h1 style={{display: 'none'}}>Home</h1>
      <Slider text={sliderText}/>
      <HappyCouple/>
    </section>
  );
}