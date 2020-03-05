import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { Button, TextField } from '@material-ui/core';
import { store } from 'react-notifications-component';
import useLocalStorage from '../hooks/useLocalStorage';
import { useHistory, useLocation } from "react-router-dom";

import {requestAccessKey, requestUser} from '../api/auth_service';

function Invite({t, setUser}) {
  const location = useLocation();
  const history = useHistory();
  const queryData = location.search.split('?')[1];
  const queryParameters = queryData ? queryData.split('&').map(element => {
    return element.split('=')
  }) : [];
  const key = queryParameters.filter( e => e[0] == 'key')[0];

  const [_access_token, setAccessToken] = useLocalStorage('access_token', null);
  const [_refresh_token, setRefreshToken] = useLocalStorage('refresh_token', null);

  useEffect(_ => {
    if (!key) return history.push('/');
    requestAccessKey(key).then(access_data => {
      if (access_data) {
        requestAccessKey(access_data.access_token, 'key').then(
          access_data => {
            setAccessToken(access_data.access_token);
            setRefreshToken(access_data.refresh_token);
            requestUser(access_data.access_token).then(user => setUser(user)).then(
              _=> history.push('/rsvp')
            );
          }
        )
      } else history.push('/')
    })
  }, [location.search]);

  return (
    <section className="Invite">
    </section>
  );
}

export default withTranslation("invite")(Invite);