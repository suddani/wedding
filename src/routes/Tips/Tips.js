import React, {useState} from 'react';
import { withTranslation, Trans } from 'react-i18next';
import './Tips.css'

function Tips({t}) {
  return <section className="Tips">
    <h1 style={{display: 'none'}}>Tips</h1>
    <div>
      <h4>Wedding location</h4>
      <h4>Food</h4>
      <h4>Stuff to do in Ukraine</h4>
    </div>
  </section>;
}


export default withTranslation("tips")(Tips);