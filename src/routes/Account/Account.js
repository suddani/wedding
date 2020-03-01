import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { palette } from '../../styles/colors';
import { withTranslation } from 'react-i18next';
import { store } from 'react-notifications-component';

import './Account.scss';

const themeName = 'So Gold';

const theme = createMuiTheme({ palette, themeName });

function Account({t}) {
  return <section>
    Account
  </section>;
}

export default withTranslation("account")(Account);
