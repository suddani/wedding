import React from 'react';
import { withTranslation, Trans } from 'react-i18next';

import CountDown from './../../components/CountDown';
import main from './main3.png';
import color from './color.png';

import './Home.scss'

function Home({t}) {
  return (
    <section className="Home">
      <h1 style={{display: 'none'}}>Home</h1>
      <div className="ImageContainer">
        <img src={color} className="color"></img>
        <img className="couple" src={main}></img>
        <div className="fade"></div>
        <div className="SaveTheDate">
          <Trans i18nKey="Countdown" ns="home">
            <div className="start">Let the</div>
            <div className="middle">Countdown</div>
            <div className="end">Begin</div>
          </Trans>
        </div>
        <CountDown></CountDown>
        <img src={color} className="color"></img>
      </div>
    </section>
  );
}

export default withTranslation("home")(Home);