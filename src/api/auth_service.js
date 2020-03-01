const auth_host = process.env.REACT_APP_STAGE === 'dev' ? process.env.REACT_APP_API_ENDPOINT : 'api.daniel-mariia.wedding'

export function requestUser(token, user_id) {
  return fetch(
    `//${auth_host}/auth/user/${user_id||'-1'}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    credentials: "same-origin"
  }).then(
    response => response.json(), e => console.log(e)
  );
}

export function putUser(token, user_id, email, password) {
  return fetch(
    `//${auth_host}/auth/user/${user_id||'-1'}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      email: email,
      password: password
    }),
    credentials: "same-origin"
  }).then(
    response => requestUser(token, user_id)
  );
}

export function updateUser(user_id, email, password, jwt, refresh_token, setAccessToken) {
  return putUser(jwt, user_id, email, password).catch(
    _=> requestAccessKey(refresh_token).then(
      access => {
        setAccessToken(access.access_token);
        return putUser(access.access_token, user_id, email, password);
      }
  ));
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