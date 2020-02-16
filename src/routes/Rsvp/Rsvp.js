import React, {useState} from 'react';
import { withTranslation, Trans } from 'react-i18next';
import { Button, Input, Card, CardContent, Grid, InputLabel, Select, MenuItem, FormControl, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import './Rsvp.css'

function Rsvp({t}) {

  const [guestCount, setGuestCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [foodPreferences, setFoodPreferences] = useState(0);
  const [attending, setAttending] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());

  function onChange(setter) {
    return (_, event) => {
      setter(event.props.value);
    }
  }

  return <section className="Rsvp">
    <h1 style={{display: 'none'}}>RSVP</h1>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Card>
      <CardContent>
        <Grid container direction="column" spacing={1} justify='center' alignContent='center'>
          <Grid item xs={12}>{t('R.S.V.P')}</Grid>
          <Grid item className="Subtitle">{t('Please let us know if you will be able to make it.')}</Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel id="firstname-label">{t('Firstname')}</InputLabel>
              <Input labelid="firstname-label" name="firstname" type="text"></Input>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel id="lastname-label">{t('Lastname')}</InputLabel>
              <Input labelid="lastname-label" name="lastname" type="text"></Input>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel id="email-label">{t('Email')}</InputLabel>
              <Input labelid="email-label" name="email" type="email"></Input>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel id="food-label">{t('I will be attending')}</InputLabel>
              <Select labelid="food-label" value={attending} onChange={onChange(setAttending)}>
                <MenuItem value={0}>{t('Yes')}</MenuItem>
                <MenuItem value={1}>{t('No')}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel id="guests-label">{t('Guests')}</InputLabel>
              <Select labelid="guests-label" value={guestCount} onChange={onChange(setGuestCount)}>
                <MenuItem value={1}>{t('You')}</MenuItem>
                <MenuItem value={2}>{t('You+1')}</MenuItem>
                <MenuItem value={3}>{t('You+2')}</MenuItem>
                <MenuItem value={4}>{t('You+3')}</MenuItem>
                <MenuItem value={5}>{t('You+4')}</MenuItem>
                <MenuItem value={6}>{t('You+5')}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel id="children-label">{t('Children')}</InputLabel>
              <Select labelid="children-label" value={childrenCount} onChange={onChange(setChildrenCount)}>
                <MenuItem value={0}>{t('None')}</MenuItem>
                <MenuItem value={1}>{t('One')}</MenuItem>
                <MenuItem value={2}>{t('Two')}</MenuItem>
                <MenuItem value={3}>{t('Three')}</MenuItem>
                <MenuItem value={4}>{t('Four')}</MenuItem>
                <MenuItem value={5}>{t('Five')}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel id="allergies-label">{t('Allergies')}</InputLabel>
              <Input labelid="allergies-label" name="allergies" type="text"></Input>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel id="food-label">{t('Food preferences')}</InputLabel>
              <Select labelid="food-label" value={foodPreferences} onChange={onChange(setFoodPreferences)}>
                <MenuItem value={0}>{t('None')}</MenuItem>
                <MenuItem value={1}>{t('Vegetarian')}</MenuItem>
                <MenuItem value={2}>{t('Vegan')}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField
              id="date"
              label={t('Arrival Date')}
              type="date"
              defaultValue="2020-05-10"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="message"
              label={t('Short Message for the couple')}
              multiline
              rows="8"
              variant="outlined"
            />
          </Grid>
          <Grid item ><Button variant="contained">{t('Submit')}</Button></Grid>
        </Grid>
      </CardContent>
    </Card>
    </MuiPickersUtilsProvider>
  </section>;
}


export default withTranslation("rsvp")(Rsvp);