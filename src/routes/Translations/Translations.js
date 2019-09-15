import React, { useState, useEffect } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import { Button, Input, Card, CardContent, Grid } from '@material-ui/core';

import './Translations.css'

function Translations({t}) {

  const [groups, setGroups] = useState({});

  const [selectedGroup, setSelectedGroup] = useState(null);

  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadGroups = async () => {
      fetch('https://api.daniel-mariia.wedding/translation/translations/groups/wedding_page').then(
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
      fetch('https://api.daniel-mariia.wedding/translation/translations/groups/wedding_page/'+selectedGroup).then(
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
    fetch('https://api.daniel-mariia.wedding/translation/translations/wedding_page/'+translation.id, {
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
    .then(response => response.json());
  };

  const updateValue = (translation, event) => {
    translation.value = event.target.value;
    let t = {...translations};
    // t.forEach((e) => {
    //   if (e.id == translation.id)
    //     e.value = translation.value;
    // } );
    setTranslations(t);
  };

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
                  <label>{translation.key}</label>
                  <Input placeholder={translation.hint}
                         onChange={(event) => updateValue(translation, event)}
                         value={translation.value}></Input>
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