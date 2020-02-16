import React, {useState} from 'react';
import { withTranslation, Trans } from 'react-i18next';
import './Tips.css'

function Tips({t}) {
  return <section className="Tips">
    <h1 style={{display: 'none'}}>Tips</h1>
    Tips
  </section>;
}


export default withTranslation("tips")(Tips);