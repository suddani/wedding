import React from 'react';
import { withTranslation, Trans } from 'react-i18next';

import CountDown from './../../components/CountDown';
import Slider from './../../components/Slider';
import banner from './../../assets/images/main.jpeg';
import banner_small from './../../assets/images/main_small.jpeg';
import main from './main3.png';
import color from './color.png';

import './Home2.css'

function Home2({t}) {
  const sliderText = (
    <div className="saveTheDate">
      <Trans i18nKey="savethedate" ns="home">
        <div>Save</div><div>The Date</div>
      </Trans>
      <div>-10.05.2020-</div>
      <div><CountDown></CountDown></div>
    </div>);

  return (
    <section className="Home2">
      <h1 style={{display: 'none'}}>Home</h1>
      <div className="ImageContainer">
        <img src={color} className="color"></img>
        <img className="couple" src={main}></img>
        <div className="fade"></div>
        <div className="content">
          <div className="SaveTheDate">
            <div className="start">Let the</div>
            <div className="middle">Countdown</div>
            <div className="end">begin</div>
          </div>
          <div className="date">10.05.2020</div>
          <CountDown></CountDown>
          <img src={color} className="color"></img>
        </div>
      </div>
    </section>
  );
}

export default withTranslation("home")(Home2);