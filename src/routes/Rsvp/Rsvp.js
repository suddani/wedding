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
import { useHistory, useLocation } from "react-router-dom";
import Loading from './../../components/Loading';

import { store } from 'react-notifications-component';

import './Rsvp.scss';

function Rsvp({t, setUser}) {

  const location = useLocation();

  console.log(location)

  const history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [allergies, setAllergies] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [foodPreferences, setFoodPreferences] = useState(0);
  const [attending, setAttending] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [access_token, setAccessToken] = useLocalStorage("access_token", null);
  const [refresh_token, setRefreshToken] = useLocalStorage("refresh_token", null);
  const [guestNames, setGuestNames] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);



  useEffect(_ => {
    requestInvitation(access_token, refresh_token, setAccessToken).then(invitation => {
      setFirstname(invitation.firstname)
      setLastname(invitation.lastname)
      setName(invitation.invitation_name)
      setEmail(invitation.email)
      setChildrenCount(invitation.children)
      setGuestCount(invitation.guests)
      setGuestNames(invitation.guest_names);
      setAttending(invitation.attending ? 0 : 1)
      setSelectedDate(invitation.arrival_date);
      setFoodPreferences(invitation.food_preference);
      setMessage(invitation.message || "");
      setAllergies(invitation.allergies||"");
      setAnswered(invitation.answered);
      setIsLoading(false);
    }).catch(_=> {
      setUser(null);
      setAccessToken(null);
      setRefreshToken(null);
      history.push('/')
    });
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

  function onDateChange(setter) {
    return (event) => {
      setter(event.target.value);
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

  function changeGuestCount(count) {
    setGuestCount(count);
    setGuestNames([...guestNames.slice(0, (count-1)), ...Array.from(Array(count-1-guestNames.slice(0, (count-1)).length))]);
  }

  function setGuestName(index, guestNames, setGuestNames) {
    return (name) => {
      if (index == 0) {
        setGuestNames([name, ...guestNames.slice(1, guestNames.length)])
      } else {
        setGuestNames([...guestNames.slice(0, index), name, ...guestNames.slice(index+1, guestNames.length)])
      }
    };
  }

  function willAttend() {
    setAnswered(true)
    setAttending(0);
  }

  function willNotAttend() {
    setAnswered(true)
    setAttending(1)
  }

  function onSubmit() {
    if (!email || email == "") {
      store.addNotification({
        title: t("We need your Email"),
        message: t('Please enter a valid email'),
        type: "default",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 10000
        }
      });
      return;
    }
    setIsSending(true);
    answerInvitation({
      email: email,
      firstname: firstname,
      lastname: lastname,
      invitation_name: name,
      children: childrenCount,
      guests: guestCount,
      attending: attending,
      arrival_date: selectedDate,
      food_preference: foodPreferences,
      guest_names: guestNames,
      message: message,
      allergies: allergies
    }, access_token, refresh_token, setAccessToken).then(
      _=> {
        store.addNotification({
          title: t("Thank you"),
          message: attending == 0 ? t('Your Answer was received and we are looking forward to seeing you') : t('Your Answer was received.'),
          type: "default",
          insert: "top",
          className: "TEST",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 5000
          }
        });
        history.push('/');
      }
    ).catch(_=> {
      store.addNotification({
        title: t("We could not record your answer"),
        message: t('Please try again. Maybe your email was invalid or our server is down'),
        type: "default",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 10000
        }
      });
    }).finally(_=> setIsSending(false));
  }

  const content = <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container direction="column" spacing={1} justify='center' alignContent='center'>
                      <Grid item xs={12} className="Title">{t('Please let us know if you will be able to make it.')}</Grid>
                      <Grid item className="Subtitle"></Grid>
                      <Grid item>
                        <FormControl>
                          <InputLabel id="name-label">{t('Name')}</InputLabel>
                          <Input labelid="name-label" name="name" type="text" value={name} onChange={onType(setName)}></Input>
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <Grid container direction="row" justify="space-around" alignItems="center">
                          <Button variant={answered && attending == 0 ? "contained" : "outlined"} onClick={willAttend} color="primary">{t('I will attend')}</Button>
                          <Button variant={answered && attending != 0 ? "contained" : "outlined"} onClick={willNotAttend}>{t('I will Not attend')}</Button>
                        </Grid>
                      </Grid>
                      {
                        attending == 0 ? (
                          <Fragment>
                            <Grid item>
                              <FormControl>
                                <InputLabel id="email-label">{t('Email')}</InputLabel>
                                <Input labelid="email-label" name="email" type="email" value={email} onChange={onType(setEmail)}></Input>
                              </FormControl>
                            </Grid>
                            <Grid item>
                              <FormControl>
                                <InputLabel id="guests-label">{t('Guests')}</InputLabel>
                                <Select labelid="guests-label" value={guestCount} onChange={onChange(changeGuestCount)}>
                                  <MenuItem value={1}>{t('You')}</MenuItem>
                                  <MenuItem value={2}>{t('You+1')}</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>

                            {
                              guestNames.map((guestName, index) => {
                                return <Grid item xs={12} key={index}>
                                        <FormControl>
                                          <InputLabel id="guest-label">{t('Guest Name')}</InputLabel>
                                          <Input labelid="guest-label" name="guest" type="text" value={guestNames[index]} onChange={onType(setGuestName(index, guestNames, setGuestNames))}></Input>
                                        </FormControl>
                                      </Grid>
                              })
                            }

                            <Grid item>
                              <FormControl>
                                <InputLabel id="children-label">{t('Children')}</InputLabel>
                                <Select labelid="children-label" value={childrenCount} onChange={onChange(setChildrenCount)}>
                                  <MenuItem value={0}>{t('None')}</MenuItem>
                                  <MenuItem value={1}>{t('One')}</MenuItem>
                                  <MenuItem value={2}>{t('Two')}</MenuItem>
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
                                onChange={onDateChange(setSelectedDate)}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </Grid>
                          </Fragment>
                        ) : null
                      }
                      { answered ? (
                        <Fragment>
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
                          {/* <Grid item><div class="g-recaptcha" data-sitekey={process.env.REACT_APP_RECAPTCHA_PUB} data-callback={solvedChallange}></div></Grid> */}
                          <Grid item xs>
                            
                            <Button variant="contained" onClick={onSubmit} color="primary" disabled={isSending}>{t('Submit')}</Button>
                          </Grid>
                        </Fragment>
                      ) : null}
                    </Grid>
                  </MuiPickersUtilsProvider>;

  return <section className="Rsvp">
      <h1   style={{display: 'none'}}>RSVP</h1>
      {isLoading ? <Loading white={true}/> : content}
  </section>
}


export default withTranslation("rsvp")(Rsvp);