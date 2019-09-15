import React from 'react';
import { withTranslation } from 'react-i18next';

function Wedding({t}) {
  return <section>
    {t('Wedding')}
  </section>;
}

export default withTranslation("wedding")(Wedding);