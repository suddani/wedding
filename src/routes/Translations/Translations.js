import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { Button, TextField } from '@material-ui/core';
import { store } from 'react-notifications-component';

import './Translations.css'

const translations_host = '192.168.0.253';

function Translations({t}) {

  const [groups, setGroups] = useState({});

  const [selectedGroup, setSelectedGroup] = useState(null);

  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadGroups = async () => {
      fetch(`//${translations_host}/translation/translations/groups/wedding_page`).then(
        response => response.json()
      ).then((groups) => {
        setSelectedGroup(Object.keys(groups)[0]);
        setGroups(groups);
      });
    }

    loadGroups();
  }, []);

  useEffect(() => {
    const loadGroups = async () => {
      fetch(`//${translations_host}/translation/translations/groups/wedding_page/${selectedGroup}`).then(
        response => response.json()
      ).then((groups) => {
        Object.keys(groups).forEach((i) => {
          groups[i].forEach((a) => {
            if (!a.value) a.value = '';
          })
        })
        setTranslations(groups);
      });
    }

    loadGroups();
  }, [selectedGroup]);

  const updateTranslation = (translation) => {
    fetch(`//${translations_host}/translation/translations/wedding_page/${translation.id}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({
          value: translation.value
        }), // body data type must match "Content-Type" header
    })
    .then(response => response.json()).then(() => {
      store.addNotification({
        title: t("Updated Translation"),
        message: `${t('Changed translation of')} "${translation.key}"`,
        type: "default",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          // onScreen: true
        }
      });
    });
  };

  const updateValue = (translation, event) => {
    translation.value = event.target.value;
    let t = {...translations};
    setTranslations(t);
  };

  function fallbackCopyTextToClipboard(translation) {
    var textArea = document.createElement("textarea");
    textArea.value = translation.hint;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      if (successful) {
        store.addNotification({
          title: t("Copied Text"),
          message: `${t('Copied hint to clipboard')}: "${translation.hint}"`,
          type: "default",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 5000,
            // onScreen: true
          }
        });
      } else {
        store.addNotification({
          title: t("Failure"),
          message: `${t('Could not copy hint to clipboard')}: "${translation.hint}"`,
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 5000,
            // onScreen: true
          }
        });
      }
    } catch (err) {
      store.addNotification({
        title: t("Failure"),
        message: `${t('Could not copy hint to clipboard')}: "${translation.hint}"`,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          // onScreen: true
        }
      });
    }
  
    document.body.removeChild(textArea);
  }
  function copyTextToClipboard(translation) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(translation);
      return;
    }
    navigator.clipboard.writeText(translation.hint).then(function() {
      store.addNotification({
        title: t("Copied Text"),
        message: `${t('Copied hint to clipboard')}: "${translation.hint}"`,
        type: "default",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          // onScreen: true
        }
      });
    }, function(err) {
      store.addNotification({
        title: t("Failure"),
        message: `${t('Could not copy hint to clipboard')}: "${translation.hint}"`,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          // onScreen: true
        }
      });
    });
  }

  return (
    <section className="Translations">
      <div className="languages">
        {
          Object.keys(groups).map((key) =>
            <Button key={key}
                    variant={key===selectedGroup ? 'contained' : 'text'}
                    color={key===selectedGroup ? 'primary' : 'default'}
                    onClick={() => {setSelectedGroup(key)}}>
              {key}
            </Button>
          )
        }
      </div>
      <div className="namespaces">
        {
          (groups[selectedGroup]||[]).map(key => (
          <section key={key}>
            <h3>{key}</h3>
            {
              (translations[key]||[]).map((translation) => (
                <div className="translation" key={translation.id}>
                  <label onClick={() => copyTextToClipboard(translation)}>{translation.key}</label>
                  <TextField placeholder={translation.hint}
                         onChange={(event) => updateValue(translation, event)}
                         value={translation.value}
                         multiline></TextField>
                  <Button onClick={() => updateTranslation(translation)}>{t('Save')}</Button>
                </div>
              ))
            }
          </section>))
        }
      </div>

    </section>
  );
}

export default withTranslation("translations")(Translations);