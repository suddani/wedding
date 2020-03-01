import React, {useState, Fragment, useEffect} from 'react';
import { withTranslation, Trans } from 'react-i18next';
import { Button, Input, Card, CardContent, Grid, InputLabel, Select, MenuItem, FormControl, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import useLocalStorage from '../../hooks/useLocalStorage';
import { login, requestUser, forgotPassword } from '../../api/auth_service';
import { useHistory, useLocation } from "react-router-dom";

import { store } from 'react-notifications-component';

import './Login.scss';

function Login({t, user, setUser}) {
  const [_access_token, setAccessToken] = useLocalStorage('access_token', null);
  const [_refresh_token, setRefreshToken] = useLocalStorage('refresh_token', null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [forgot, setForgot] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const redirectedFrom = location.state?.from;

  function set(setter) {
    return (event) => setter(event.target.value)
  }

  function doForgot() {
    forgotPassword(username).then(
      _ => setForgot(true)
    )
  }

  function doLogin() {
    login(username, password).then(
      access_data => {
        setAccessToken(access_data.access_token);
        setRefreshToken(access_data.refresh_token);
        requestUser(access_data.access_token).then(user => setUser(user)).then(
          _=> history.push(redirectedFrom || '/')
        );
      }
    ).catch( _ => store.addNotification({
      title: t("Failed"),
      message: t('Your Username or Password is wrong'),
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 500
      }
    }))
  }

  return <section className="Login">
    { forgot ? t('Please check your Email (Do not forget the Spam Folder)') :
      <Card className="content">
        <CardContent>
          <Grid container direction="column" spacing={2} justify='center' alignContent='center'>
            <Grid item>{t('Please login')}</Grid>
            <Grid item>
              <FormControl>
                <InputLabel id="name-label">{t('Name')}</InputLabel>
                <Input labelid="name-label" name="username" type="username" onChange={set(setUsername)}></Input>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel id="password-label">{t('Password')}</InputLabel>
                <Input labelid="password-label" name="password" type="password" onChange={set(setPassword)}></Input>
              </FormControl>
            </Grid>
            <Grid item ><Button variant="contained" onClick={doLogin} color="secondary">{t('Login')}</Button></Grid>
            <Grid item ><Button variant="contained" onClick={doForgot} color="secondary">{t('Forgot Password')}</Button></Grid>
          </Grid>
        </CardContent>
      </Card>
    }
  </section>
}

export default withTranslation("login")(Login);
