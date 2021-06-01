import { requestAccessKey } from './auth_service';

const translations_host = process.env.REACT_APP_TRANSLATION_API_ENDPOINT || process.env.REACT_APP_API_ENDPOINT || 'api.daniel-mariia.wedding';

export function loadGroups() {
  return fetch(`//${translations_host}/translation/translations/groups/wedding_page`).then(
    response => {
      if (response.ok)
        return response.json()
      else
        return Promise.reject()
    }
  );
}

export function loadTranslations(selectedGroup) {
  return fetch(`//${translations_host}/translation/translations/groups/wedding_page/${selectedGroup}`).then(
    response => {
      if (response.ok)
        return response.json()
      else
        return Promise.reject()
    }
  );
}

export function postTranslationUpdate(translation, token) {
  return fetch(`//${translations_host}/translation/translations/wedding_page/${translation.id}`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify({
      value: translation.value
    }), // body data type must match "Content-Type" header
  })
}

export function updateTranslation(translation, jwt, refresh_token, setAccessToken) {
  return postTranslationUpdate(translation, jwt)
    .then(response => {
      if (response.ok)
        return response.json()
      else
        return Promise.reject()
    })
    .catch( _=> requestAccessKey(refresh_token).then(
      access => {
        setAccessToken(access.access_token);
        return postTranslationUpdate(translation, access.access_token).then(r => r.json());
      }
    ));
}

export default {
  loadGroups,
  loadTranslations,
  postTranslationUpdate,
  updateTranslation
}