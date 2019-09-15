import React from 'react';
import { withTranslation } from 'react-i18next';

function Galery({t}) {
  return <section>
    {t('Gallery')}
  </section>;
}

export default withTranslation("gallery")(Galery);