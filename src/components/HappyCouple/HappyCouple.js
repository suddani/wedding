import React from 'react';

import './HappyCouple.css';

import bride from './../../assets/images/bride.jpg';
import groom from './../../assets/images/groom.jpg';

export default function HappyCouple(props) {
  return (
    <section className="HappyCouple">
      <h1>The happy couple</h1>
      <p className="introduction">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus.
      </p>
      <div className="bride">
        <img src={bride}></img>
        <div></div>
      </div>
      <p className="brideText"><b>Mariia Sendziuk</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus.</p>
      <div className="groom">
        <img src={groom}></img>
        <div></div>
      </div>
      <p className="groomText"><b>Daniel Sudmann</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus.</p>
    </section>
  );
}