import React, { useEffect, useCallback, useRef } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './Story.css';

import nuernberg from './nuernberg.jpg';
import miami from './miami.jpg';
import u6 from './u6.jpg'
import firstOktoberfest from './firstOktoberfest.jpg'


function Entry(img, month, title, text) {
  this.reference = useRef(null);
  this.textReference = useRef(null);

  this.render = (index, t, left, right) => {
    const imagePos = index == 0 ? left : (index%2!=0 ? right : left);
    const textPos = index == 0 ? ['text', right].join(' ') : (index%2!=0 ? ['text', left].join(' ') : ['text', right].join(' '));
    return <div className="entry" key={index}>
            <img ref={this.reference} className={imagePos} src={img}></img>
            <div ref={this.textReference} className={textPos}>
              <div className="date">{t(month)}</div>
              <h2>{t(title)}</h2>
              <p>{text}</p>
            </div>
          </div>
  }
}

function Year(year, entries, reverse) {
  Object.defineProperties(this, {
    entries: {
      get: _ => entries
    },
    left: {
      get: _ => reverse ? 'right' : ''
    },
    right: {
      get: _ => reverse ? '' : 'right'
    }
  });
  
  this.render = (index, t) => {
    return <div className="year" key={index}>
            <h1>{year}</h1>
            {entries.map((entry, index) => entry.render(index, t, this.left, this.right))}
          </div>
  }
}

function Story({t}) {
  const story = [
    new Year(2015, 
      [
        new Entry(u6, '', 'Let the story begin ...', <Trans i18nKey="theStoryBegin" ns="story">When a company Xmas was in full swing, Mariia has decided to leave since a day after had to be a workig day. Already while waiting for U-bahn, it got obvious that she was not the only one leaving earlier and her reason apparently was not that serious - a few more guys were moving to a different party. Amoung faces she knew from the office, there was one, which she had never seen before. After "Hey, I'm Daniel" she immediately understood who is that: a "genious dev guy; student, that appears and disappears in the office time to time; author of the most of code that others called "magic" and a new member of her team from the next month". But at that evening she just answered "Mariia, nice to meet you" and the conversetion about nothing was going until she exited on her stop...</Trans>)
      ]),
    new Year(2016, 
      [
        new Entry(nuernberg, '', 'Time to start a great project', <Trans i18nKey="theStoryDrinks" ns="story">From the first Daniel's day in the company they were working together. Regardless was it a huge projects planning, bugfixes until the late night or just long talks about life after a few drinks in the Tower - everything was fun as loong as we were doing it together.</Trans>)
      ], true),
    new Year(2017, 
      [
        new Entry(u6, '', 'How about beeing a friends? Or maybe more?', <Trans i18nKey="theStoryMaybeMore" ns="story">It took us quite some time to realize and admit that whatever is goign on there is not filling anymore in the definition of "good collegue" or "nice team member". Not even in "friend". It was more. And we were trying out how much by very slowly and carefuly extending the borders from work to personal life: it's hard to explain Mariia's amazement when she saw in real life fraternity that before she knew only from american movies. Or Daniel's confusion when he was sarounded by Ukrainians that were talking the "weird language he can't understand".</Trans>)
      ]),
    new Year(2018, 
      [
        new Entry(miami, '', "It's called love", <Trans i18nKey="theStoryLove" ns="story">Step by step we were getting closer. From the weekly schedule of 8/5 we have been moving to 24/7. Vacations, families intros, Mariia's first real ski vacation (when there was actually skiing not only spa :)) and Daniel's Ukrainian probation test by 60% home made vodka - at some point we realized that the life won't make sense without each other.</Trans>)
      ], true),
    new Year(2019, 
      [
        new Entry(nuernberg, '', 'She said yes', <Trans i18nKey="theStoryYes" ns="story">When during the dinner right before the vacation Mariia said "Finally we can relax", Daniel anwered "Not yet". Super confusing, na? In a few days it totally made sense and was logical: Daniel proposed her. It was on a ship, at the place, where they went to their first vacation as a couple. Let the details stay only for us.</Trans>),
        new Entry(firstOktoberfest, '', 'Germany said yes as well', <Trans i18nKey="theStoryReallyYes" ns="story">Starting the process, we were aware of all the bureaucracy issues and were expecting the date in 2020. Surpricevly, it took us only a bit longer than a month (my Ukraininan friends keep asking HOW?) and 16th of October we officially created family Sudmann. We were happy to share this day with the closest people!</Trans>)
      ]),
    new Year(2020, 
      [
        new Entry(u6, '', 'But the bigger event is coming...', <Trans i18nKey="theStoryBigEvent" ns="story">For us besides the civil wedding, there are 2 more very important events: get married in the eyes of God and share our promices with each other. We would like to share this with you and celebrate it on a big scale! Pls join us on the most important day!<br></br>10.05.2020</Trans>)
      ]
    )
  ];
  const imageRefs = story.map(year => year.entries.map(entry => entry.reference)).flat();
  const textRefs = story.map(year => year.entries.map(entry => entry.textReference)).flat();

  useIntersectionObserver((entries) => {
    entries.forEach( element => {
      if (element.isIntersecting && element.intersectionRatio > 0.4) {
        const direction = element.target.className == "right" ? 'slide-in-right' : 'slide-in'
        element.target.style.animation = `${direction} 1s forwards ease-out`;
      } else if (!element.isIntersecting) {
        // element.target.style.animation = 'none';
      }
    })
  }, imageRefs, imageRefs);

  useIntersectionObserver((entries) => {
    entries.forEach( element => {
      if (element.isIntersecting && element.intersectionRatio > 0.4) {
        element.target.style.animation = `slide-in-bottom 1s forwards ease-out`;
      } else if (!element.isIntersecting) {
        // element.target.style.animation = 'none';
      }
    })
  }, textRefs, textRefs);

  return (<section className="StoryMain">
    {story.map((year, index) => year.render(index, t))}
  </section>);
}

export default withTranslation("story")(Story);