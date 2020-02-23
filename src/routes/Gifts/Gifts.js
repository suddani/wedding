import React, {useState} from 'react';
import { withTranslation, Trans } from 'react-i18next';
import './Gifts.scss'

function Gifts({t}) {
  return <section className="Gifts">
    <h1 style={{display: 'none'}}>Gifts</h1>
    <div>
      {t('Coming Soon')}
    </div>
  </section>;
}


export default withTranslation("gifts")(Gifts);