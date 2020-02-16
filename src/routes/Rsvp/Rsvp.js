import React, {useState, Fragment, useEffect} from 'react';
import { withTranslation, Trans } from 'react-i18next';
import { Button, Input, Card, CardContent, Grid, InputLabel, Select, MenuItem, FormControl, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import useLocalStorage from '../../hooks/useLocalStorage';
import {requestInvitation, answerInvitation} from '../../api/invitation_service';
import { useHistory } from "react-router-dom";


import './Rsvp.css'

function Rsvp({t}) {

  const history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [message, setMessage] = useState("");
  const [allergies, setAllergies] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [foodPreferences, setFoodPreferences] = useState(0);
  const [attending, setAttending] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [userData, setUser] = useLocalStorage("user", null);
  const [access_token, setAccessToken] = useLocalStorage("access_token", null);
  const [refresh_token, setRefreshToken] = useLocalStorage("refresh_token", null);



  useEffect(_ => {
    requestInvitation(access_token, refresh_token, setAccessToken).then(invitation => {
      setFirstname(invitation.firstname)
      setLastname(invitation.lastname)
      setChildrenCount(invitation.children)
      setGuestCount(invitation.guests)
      setAttending(invitation.attending ? 0 : 1)
      setSelectedDate(invitation.arrival_date);
      setFoodPreferences(invitation.food_preference);
      setMessage(invitation.message);
      setAllergies(invitation.allergies||"");
    }).catch(_=> history.push('/'));
  }, []);

  function onChange(setter) {
    return (_, event) => {
      try {
        setter(event.props.value);
      } catch(e) {
        console.log(e)
      }
    }
  }

  function onType(setter) {
    return (event) => {
      try {
        setter(event.target.value);
      } catch(e) {
        console.log(e)
      }
    }
  }

  function onSubmit() {
    answerInvitation({
      firstname: firstname,
      lastname: lastname,
      children: childrenCount,
      guests: guestCount,
      attending: attending,
      arrival_date: selectedDate,
      food_preference: foodPreferences,
      message: message,
      allergies: allergies
    }, access_token, refresh_token, setAccessToken).catch(_=> history.push('/'));
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
              <Input labelid="firstname-label" name="firstname" type="text" value={firstname} onChange={onType(setFirstname)}></Input>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel id="lastname-label">{t('Lastname')}</InputLabel>
              <Input labelid="lastname-label" name="lastname" type="text" value={lastname} onChange={onType(setLastname)}></Input>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel id="email-label">{t('Email')}</InputLabel>
              <Input labelid="email-label" name="email" type="email" value={userData.user.email} disabled></Input>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel id="attending-label">{t('I will be attending')}</InputLabel>
              <Select labelid="attending-label" value={attending} onChange={onChange(setAttending)}>
                <MenuItem value={0}>{t('Yes')}</MenuItem>
                <MenuItem value={1}>{t('No')}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {
            attending == 0 ? (
              <Fragment>
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
                    <Input labelid="allergies-label" name="allergies" type="text" value={allergies} onChange={onType(setAllergies)}></Input>
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
                    value={selectedDate}
                    onChange={onChange(setSelectedDate)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Fragment>
            ) : null
          }
          <Grid item>
            <TextField
              id="message"
              label={t('Short Message for the couple')}
              multiline
              rows="8"
              variant="outlined"
              value={message}
              onChange={onType(setMessage)}
            />
          </Grid>
          <Grid item ><Button variant="contained" onClick={onSubmit}>{t('Submit')}</Button></Grid>
        </Grid>
      </CardContent>
    </Card>
    </MuiPickersUtilsProvider>
  </section>;
}


export default withTranslation("rsvp")(Rsvp);