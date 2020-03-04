import React, { useEffect, useCallback, useRef, Suspense } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useImagePreloader from '../../hooks/useImagePreloader';
import './Story.scss';

import firstOktoberfest from './firstOktoberfest.jpg'
import firstSelfie from './firstSelfie.jpg';
import greatProject from './greatProject.jpg';
import justFriends from './justFriends.jpg';
import itsLove from './itsLove.jpg';
import sheYes from './sheYes.jpg';
import germanyYes from './germanyYes.jpg';
import bigEvent from './bigEvent.jpg';

function Entry(img, month, title, text, preLoader) {
  this.reference = useRef(null);
  this.textReference = useRef(null);

  this.render = (index, t, left, right) => {
    preLoader.wait(img);
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

  const headline = ({year}) => year ? <h1>{year}</h1> : null;
  
  this.render = (index, t) => {
    return <div className="year" key={index}>
            <headline year={year}/>
            {entries.map((entry, index) => entry.render(index, t, this.left, this.right))}
          </div>
  }
}

function Story({t}) {
  const preLoader = useImagePreloader();

  const story = [
    new Year(null,
      [
        new Entry(firstSelfie, '', 'Let the story begin ...', (<Trans i18nKey="theStoryBegin" ns="story">
          When the company’s Christmas party was still in full swing, Mariia decided to leave early since she had to work the day after.
          When Mariia was already waiting for U-Bahn, it got obvious that she was not the only one leaving earlier that night and, apparently, her reason was not that legitimate:
          a few more guys were only beginning their night as they were moving to a different party.
          Whereas she knew most of the faces from the office, there was one that she had never seen before.
          After “Hey, I’m Daniel”, she immediately understood who that was: the “genius dev guy”,
          “student who appears and disappears in the office every once in while”,
          the author of the most of the code that others called “magic” and a new member of her team beginning from the following month.
          That evening, though, she just answered: “Mariia, nice to meet you”.
          Their conversation that night was limited to just a small talk on the U-Bahn and was interrupted when Mariia had to exit at her station....
          </Trans>), preLoader)
      ]),
    new Year(null,
      [
        new Entry(greatProject, '', 'Time to start a great project', (<Trans i18nKey="theStoryDrinks" ns="story">
          They have been working together since Daniel’s first day in the company.
          Regardless whether it was a huge project planning,
          late night bugfixing or just long conversations about life after a few drinks in the Tower,
          everything was fun as long as we were doing it together.
          </Trans>), preLoader)
      ], true),
    new Year(null,
      [
        new Entry(justFriends, '', 'How about being a friends? Or maybe more?', (<Trans i18nKey="theStoryMaybeMore" ns="story">
          It took us quite some time to realise and admit that whatever was going on between us did not fit in the definition of “good colleague”,
          “nice team member” or even “friend”.
          There was more to our relationship than that.
          The question was – how much more? We tried to figure it out by slowly and carefully extending the borders of our relationship:
          from the office to personal lives;
          it’s hard to describe Mariia’s astonishment when she saw a real-life fraternity for the first time after having only known about them from American films.
          It’s even harder to describe Daniel’s confusion when he experienced being surrounded by Ukrainians “speaking the weird language he can’t understand” for the first time.
          </Trans>), preLoader)
      ]),
    new Year(null,
      [
        new Entry(itsLove, '', "It's called love", (<Trans i18nKey="theStoryLove" ns="story">
          Step by step, we were getting closer – starting when we spent time together according to the office 9-to-5 schedule,
          we gradually moved to the point when the schedule of having each other 24/7 made us both happier.
          Holidays together, Mariia’s first legit ski trip (when there was actual skiing instead of just spa :) ) ,
          Daniel’s probation test by 60% home-made vodka in Ukraine  - at some point,
          we realised that life won’t make sense if we are not beside each other.
          </Trans>), preLoader)
      ], true),
    new Year(null,
      [
        new Entry(sheYes, '', 'She said yes', (<Trans i18nKey="theStoryYes" ns="story">
          During a dinner right before a vacation together,
          Mariia sighed with relief: “Finally we can relax”.
          Daniel answered: “Not yet”.
          Super confusing, eh?
          It totally made sense and became logical a few days after: Daniel proposed to Mariia.
          It was on a ship, at a place where we first went on a holiday as a couple.
          Let us keep the details to ourselves.
          </Trans>), preLoader),
        new Entry(germanyYes, '', 'Germany said yes as well', (<Trans i18nKey="theStoryReallyYes" ns="story">
          Starting the process, we were aware of all the bureaucracy issues and expected to legalize our family in 2020.
          Surprisingly, it only took us a little over a month (our Ukrainian friends keep asking HOW?) and we officially created family Sudmann.
          We were happy to share that day with the closest people!
          </Trans>), preLoader)
      ]),
    new Year(null,
      [
        new Entry(bigEvent, '', 'But the bigger event is coming...', (<Trans i18nKey="theStoryBigEvent" ns="story">
          Apart from the civil wedding, there are two events that are utterly significant to us:
          share our promises in front of God and each other.
          We would like to share our joy and happiness with you and celebrate it in a big way.
          Please join us on the most important day!<br></br><b>10.05.2020</b>
          </Trans>), preLoader)
      ]
    )
  ];
  const imageRefs = story.map(year => year.entries.map(entry => entry.reference)).flat();
  const imageRefValues = story.map(year => year.entries.map(entry => entry.reference.current)).flat();
  const textRefs = story.map(year => year.entries.map(entry => entry.textReference)).flat();

  useIntersectionObserver((entries) => {
    entries.forEach( element => {
      if (element.isIntersecting && element.intersectionRatio > 0.4) {
        const direction = element.target.className == "right" ? 'slide-in-right' : 'slide-in'
        element.target.style.animation = `${direction} 1s forwards ease-out`;
      } else if (!element.isIntersecting) {
        element.target.style.animation = 'none';
      }
    })
  }, imageRefs, imageRefValues);

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