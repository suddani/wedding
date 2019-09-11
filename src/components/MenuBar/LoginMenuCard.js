import React from 'react';
import { Button, Input, Card, CardContent, Grid } from '@material-ui/core';

function LoginMenuCard(props) {
  return (
    <Card>
      <CardContent>
        <Grid container direction="column" spacing={2} justify='center' alignContent='center'>
          <Grid item>Login</Grid>
            <Grid item><Input name="username" type="username"></Input></Grid>
            <Grid item><Input name="password" type="password"></Input></Grid>
            <Grid item ><Button variant="contained">Login</Button></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default LoginMenuCard;