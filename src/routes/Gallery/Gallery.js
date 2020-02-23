import React from 'react';
import { withTranslation } from 'react-i18next';

import './Gallery.scss'

function Gallery({t}) {
  return <section className="Gallery">
    <h1 style={{display: 'none'}}>{t('Gallery')}</h1>
    <div>
      {t('Coming Soon')}
    </div>
  </section>;
}

export default withTranslation("gallery")(Gallery);