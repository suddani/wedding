import React from 'react';
import CountDown from './../CountDown';
import Slider from './../Slider';
import HappyCouple from './../HappyCouple';

import './Home.css'

export default function Home() {
  const sliderText = (<div className="saveTheDate">
    <div>Save</div>
    <div>The Date</div>
    <div>-10.05.2020-</div>
    <div><CountDown></CountDown></div>
  </div>);

  return (
    <section className="Home">
      <h1 style={{display: 'none'}}>Home</h1>
      <Slider text={sliderText}/>
      <HappyCouple/>
    </section>
  );
}