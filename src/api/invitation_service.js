import { requestAccessKey } from './auth_service';

const invitation_host = process.env.REACT_APP_STAGE === 'dev' ? '192.168.0.253' : 'api.daniel-mariia.wedding'

export function fetchInvitation(token, user_email){
  return fetch(
    `//${invitation_host}/rsvp/answer${user_email ? `?email=${user_email}` : ''}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    credentials: "same-origin"
  })
}

export function requestInvitation(token, refresh_token, setAccessToken, user_email) {
  return fetchInvitation(token, user_email).then(
    response => response.json()
  ).catch( _=> requestAccessKey(refresh_token).then(
    access => {
      setAccessToken(access.access_token);
      return fetchInvitation(access.access_token, user_email).then(r => r.json());
    }
  ));
}

export function postAnswer(token, payload, user_email) {
  return fetch(
    `//${invitation_host}/rsvp/answer`, {
    method: "PUT",
    body: JSON.stringify({...payload}),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    credentials: "same-origin"
  });
}

export function answerInvitation(payload, jwt, refresh_token, setAccessToken, user_email) {
  return postAnswer(jwt, payload, user_email).then(
    response => response.json()
  ).catch( _=> requestAccessKey(refresh_token).then(
    access => {
      setAccessToken(access.access_token);
      return postAnswer(access.access_token, payload, user_email).then(r => r.json());
    }
  ));
}