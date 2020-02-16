import React from 'react';
import { withTranslation, Trans } from 'react-i18next';

import CountDown from './../../components/CountDown';
import Slider from './../../components/Slider';
import banner from './../../assets/images/main.jpeg';
import banner_small from './../../assets/images/main_small.jpeg';
import main from './m-d-061.jpg';

import './Home.css'

function Home({t}) {
  const sliderText = (
    <div className="saveTheDate">
      <Trans i18nKey="savethedate" ns="home">
        <div>Save</div><div>The Date</div>
      </Trans>
      <div>-10.05.2020-</div>
      <div><CountDown></CountDown></div>
    </div>);

  return (
    <section className="Home">
      <h1 style={{display: 'none'}}>Home</h1>
      <div className="ImageContainer">
        <img src={main}></img>
        <div className="fade"></div>
      </div>
      <div className="ImageContainer">
        <CountDown></CountDown>
      </div>
    </section>
  );
}

export default withTranslation("home")(Home);