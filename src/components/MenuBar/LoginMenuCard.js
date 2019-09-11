import React from 'react';
import { Button, Input, Card, CardContent, Grid } from '@material-ui/core';
import { withTranslation } from 'react-i18next';

function LoginMenuCard({t}) {
  return (
    <Card>
      <CardContent>
        <Grid container direction="column" spacing={2} justify='center' alignContent='center'>
          <Grid item>{t('Login')}</Grid>
            <Grid item><Input name="username" type="username"></Input></Grid>
            <Grid item><Input name="password" type="password"></Input></Grid>
            <Grid item ><Button variant="contained">{t('Go')}</Button></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default withTranslation("menu")(LoginMenuCard);