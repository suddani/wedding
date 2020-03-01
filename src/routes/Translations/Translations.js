import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { Button, TextField } from '@material-ui/core';
import { store } from 'react-notifications-component';
import useLocalStorage  from './../../hooks/useLocalStorage';
import translationService from './../../api/translation_service';

import './Translations.scss'

function Translations({t}) {

  const [groups, setGroups] = useState({});

  const [selectedGroup, setSelectedGroup] = useState(null);

  const [translations, setTranslations] = useState({});

  const [access_token, setAccessToken] = useLocalStorage("access_token", null);
  const [refresh_token, setRefreshToken] = useLocalStorage("refresh_token", null);

  useEffect(() => {
    const loader = async () => {
      translationService.loadGroups().then((groups) => {
        setSelectedGroup(Object.keys(groups)[0]);
        setGroups(groups);
      });
    }

    loader();
  }, []);

  useEffect(() => {
    const loader = async () => {
      translationService.loadTranslations(selectedGroup).then((translations) => {
        Object.keys(translations).forEach((i) => {
          translations[i].forEach((a) => {
            if (!a.value) a.value = '';
          })
        })
        setTranslations(translations);
      });
    }

    loader();
  }, [selectedGroup]);

  const updateTranslation = (translation) => {
    translationService.updateTranslation(translation, access_token, refresh_token, setAccessToken)
    .then(() => {
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
      }
    } catch (err) {
      store.addNotification({
        title: t("Failure"),
        message: `${t('Could not copy hint to clipboard')}: "${translation.hint}"`,
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