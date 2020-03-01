
const auth_host = process.env.REACT_APP_STAGE === 'dev' ? process.env.REACT_APP_API_ENDPOINT : 'api.daniel-mariia.wedding'

export function requestUser(token, user_id) {
  return fetch(
    `//${auth_host}/auth/user/${user_id||'-1'}?jwt=${token}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }).then(
    response => response.json(), e => console.log(e)
  );
}

export function requestAccessKey(token, type) {
  return fetch(
    `//${auth_host}/auth/authenticate`, {
    method: "POST",
    body: JSON.stringify({
      type: type || 'refresh',
      key: token
    }),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }).then(
    response => response.json(), e => console.log(e)
  );
}

export function login(username, password) {
  return fetch(
    `//${auth_host}/auth/authenticate`, {
    method: "POST",
    body: JSON.stringify({
      type: 'password',
      email: username,
      password: password
    }),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }).then(
    response => response.json()
  );
}

export function forgotPassword(email) {
  return fetch(
    `//${auth_host}/auth/authenticate`, {
    method: "POST",
    body: JSON.stringify({
      type: 'email',
      email: email
    }),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }).then(
    response => response.json()
  );
}