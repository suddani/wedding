import React from 'react';
import { withTranslation } from 'react-i18next';

import './HappyCouple.css';

import bride from './../../assets/images/bride.jpg';
import groom from './../../assets/images/groom.jpg';

function HappyCouple({t}) {
  return (
    <section className="HappyCouple">
      <h1>{t('The happy couple')}</h1>
      <p className="introduction">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus.
      </p>
      <div className="bride">
        <img src={bride} alt='Bride'></img>
        <div>
          <h4>{t('*** The bride ***')}</h4>
        </div>
      </div>
      <p className="brideText"><b>Mariia Sendziuk</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus.</p>
      <div className="groom">
        <img src={groom} alt='groom'></img>
        <div>
          <h4>{t('*** The groom ***')}</h4>
        </div>
      </div>
      <p className="groomText"><b>Daniel Sudmann</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus.</p>
    </section>
  );
}

export default withTranslation("happy")(HappyCouple);