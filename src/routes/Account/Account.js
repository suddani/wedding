import React from 'react';

import { withTranslation } from 'react-i18next';
import { store } from 'react-notifications-component';

import './Account.scss';

function Account({t}) {
  return <section>
    Account
  </section>;
}

export default withTranslation("account")(Account);
