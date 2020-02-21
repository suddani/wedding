import React, { useEffect, useCallback, useRef } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './Story.css';

import nuernberg from './nuernberg.jpg';
import miami from './miami.jpg';
import u6 from './u6.jpg'
import firstOktoberfest from './firstOktoberfest.jpg'


function Entry(img, month, title, text, reference) {
  Object.defineProperties(this, {
    reference: {
      get: _ => reference
    }
  });

  this.render = (index, t) => {
    const imagePos = index == 0 ? '' : (index%2!=0 ? 'right' : '');
    const textPos = index == 0 ? 'text right' : (index%2!=0 ? 'text' : 'text right');
    return <div ref={reference} className="entry" key={index}>
            <img className={imagePos} src={img}></img>
            <div className={textPos}>
              <div className="date">{t(month)}</div>
              <h2>{t(title)}</h2>
              <p>{text}</p>
            </div>
          </div>
  }
}

function Year(year, entries) {
  Object.defineProperties(this, {
    entries: {
      get: _ => entries
    }
  });
  this.render = (index, t) => {
    return <div className="year" key={index}>
            <h1>{year}</h1>
            {entries.map((entry, index) => entry.render(index, t))}
          </div>
  }
}

function Story({t}) {
  const story = [
    new Year(2015, 
      [
        new Entry(u6, 'December', 'Let the story begin', <Trans i18nKey="theStory1" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(nuernberg, 'December', 'Let the story begin', <Trans i18nKey="theStory2" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(miami, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(firstOktoberfest, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(u6, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null))
      ]),
    new Year(2016, 
      [
        new Entry(nuernberg, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(u6, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(firstOktoberfest, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(miami, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(nuernberg, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(u6, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null))
      ]),
    new Year(2017, 
      [
        new Entry(u6, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(nuernberg, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(firstOktoberfest, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(miami, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(u6, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(nuernberg, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null))
      ]),
    new Year(2018, 
      [
        new Entry(miami, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(u6, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(nuernberg, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(firstOktoberfest, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(miami, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null))
      ]),
    new Year(2019, 
      [
        new Entry(nuernberg, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(firstOktoberfest, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(miami, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(nuernberg, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null))
      ]),
    new Year(2020, 
      [
        new Entry(u6, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(nuernberg, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(firstOktoberfest, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(nuernberg, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(miami, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(u6, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(firstOktoberfest, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(u6, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(firstOktoberfest, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(miami, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(nuernberg, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null)),
        new Entry(u6, 'December', 'Let the story begin', <Trans i18nKey="theStory3" ns="story">Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</Trans>, useRef(null))
      ]
    )
  ];
  const entryRefs = story.map(year => year.entries.map(entry => entry.reference)).flat();

  useIntersectionObserver((entries) => {
    entries.forEach( element => {
      if (element.isIntersecting && element.intersectionRatio > 0.4) {
        const direction = element.target.className == "right" ? 'slide-in-right' : 'slide-in'
        element.target.style.animation = `${direction} 2s forwards ease-out`;
      } else if (!element.isIntersecting) {
        // element.target.style.animation = 'none';
      }
    })
  }, entryRefs, entryRefs);

  return (<section className="StoryMain">
    {/* <Trans i18nKey="theStory" ns="story">
      <section className="Story">
        <p>Daniel Sudmann is a beautiful, handsome and helpful software engineer from Europe. His life is going nowhere until he meets Mariia Sendziuk, a smart, sexy woman with a passion for playing games.
        <br/>Daniel takes an instant disliking to Mariia and the selfish and hungry ways she learnt during her years in Ukraine.
        <br/>However, when a shark tries to hurt Daniel, Mariia springs to the rescue. Daniel begins to notices that Mariia is actually rather generous at heart.</p>
      </section>
        <Slider text={<div className="shark">"The Shark"</div>} height='300' banner={shark}/>
      <section className="Story">
        <p>But, the pressures of Mariia's job as a product manager leave her blind to Daniel's affections and Daniel takes up peotry to try an distract herself.
        <br/>Finally, when wild , Brad DeVito, threatens to come between them, Mariia has to act fast. But will they ever find the sensational love that they deserve?</p>
      </section>
    </Trans> */}

    {story.map((year, index) => year.render(index, t))}

    {/* <div className="year">
      <h1>2015</h1>
      <div className="entry">
        <img src={u6}></img>
        <div className="text right">
        <div className="date">{t('December')}</div>
          <h2>Let the story begin</h2>
          <p>Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</p>
        </div>
      </div>
      <div className="entry">
        <img className="right" src={u6}></img>
        <div className="text">
          <div className="date"></div>
          <h2>Let the story begin</h2>
          <p>Laboris aute reprehenderit nulla elit. Officia elit eiusmod est non incididunt adipisicing ex. Elit dolor eu dolore tempor incididunt commodo dolor deserunt. Sunt ut pariatur elit enim minim eu est amet. Aute minim amet enim mollit mollit aute ex.</p>
        </div>
      </div>
    </div> */}

    {/* <img src={miami}></img>
    <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
    <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
    <img src={nuernberg}></img>
    <img src={nuernberg}></img>
    <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
    <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
    <img src={nuernberg}></img>
    <img src={nuernberg}></img>
    <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div> */}
  </section>);
}

export default withTranslation("story")(Story);