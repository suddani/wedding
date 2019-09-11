import React from 'react';
import CountDown from './../../components/CountDown';
import Slider from './../../components/Slider';
import HappyCouple from './../../components/HappyCouple';
import banner from './../../assets/images/main.jpeg';
import banner_small from './../../assets/images/main_small.jpeg';

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
      <Slider text={sliderText} banner={banner} banner_small={banner_small}/>
    </section>
  );
}