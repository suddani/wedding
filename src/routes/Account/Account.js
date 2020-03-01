import React, {useState} from 'react';

import { withTranslation } from 'react-i18next';
import { store } from 'react-notifications-component';
import { Button, Input, Grid, InputLabel, FormControl } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { updateUser } from '../../api/auth_service';

import './Account.scss';

function Account({t, user, setUser}) {
  const [email, setEmail] = useState(user.user.email);
  const [password, setPassword] = useState("");
  const [access_token, setAccessToken] = useLocalStorage("access_token", null);
  const [refresh_token, setRefreshToken] = useLocalStorage("refresh_token", null);

  const history = useHistory();

  function onType(setter) {
    return (event) => {
      try {
        setter(event.target.value);
      } catch(e) {
        console.log(e)
      }
    }
  }

  console.log(user)

  function onLogout() {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
    history.push('/');
    store.addNotification({
      title: t("Good bye"),
      message: t('You have been logged out'),
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 10000
      }
    });
  }

  function onSubmit() {
    updateUser(user.user.id, email, password, access_token, refresh_token, setAccessToken).then(
      userData => {
        store.addNotification({
          title: t("Updated"),
          message: t('Update completed'),
          type: "default",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 10000
          }
        });
        setUser(userData);
      }
    ).catch( _ => history.push('/'));
  }

  return <section>
    <Grid container direction="column" spacing={1} justify='center' alignContent='center'>
      <Grid item>
        <FormControl>
          <InputLabel id="email-label">{t('Email')}</InputLabel>
          <Input labelid="email-label" name="email" type="email" value={email} onChange={onType(setEmail)}></Input>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <InputLabel id="password-label">{t('Password')}</InputLabel>
          <Input labelid="password-label" name="password" type="password" value={password} onChange={onType(setPassword)}></Input>
        </FormControl>
      </Grid>
      <Grid item ><Button variant="contained" onClick={onSubmit} color="secondary">{t('Update')}</Button></Grid>
      <Grid item ><Button variant="contained" onClick={onLogout} color="danger">{t('Logout')}</Button></Grid>
    </Grid>
  </section>;
}

export default withTranslation("account")(Account);
