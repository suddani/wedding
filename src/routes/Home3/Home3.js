import React from 'react';
import { withTranslation, Trans } from 'react-i18next';

import CountDown from './../../components/CountDown';
import Slider from './../../components/Slider';
import banner from './../../assets/images/main.jpeg';
import banner_small from './../../assets/images/main_small.jpeg';
import main from './image.png';

import './Home3.css'

function Home3({t}) {
  return (
    <section className="Home3">
      <h1 style={{display: 'none'}}>Home</h1>
    </section>
  );
}

export default withTranslation("home")(Home3);