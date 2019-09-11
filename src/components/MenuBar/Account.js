import React from 'react';
import LoginMenuCard from './LoginMenuCard';
import { withTranslation } from 'react-i18next';

function Account({t}) {
  return <span className="AccountButton">
    {t('Account')}
    <LoginMenuCard/>
  </span>
}
export default withTranslation("menu")(Account);