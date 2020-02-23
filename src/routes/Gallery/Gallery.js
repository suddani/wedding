import React from 'react';
import { withTranslation } from 'react-i18next';

import './Gallery.scss'

function Gallery({t}) {
  return <section className="Gallery">
    <h1 style={{display: 'none'}}>{t('Gallery')}</h1>
    <div>
      {t('Here we will post photos and videos from the wedding')}
    </div>
  </section>;
}

export default withTranslation("gallery")(Gallery);