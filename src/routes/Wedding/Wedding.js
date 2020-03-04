import React from 'react';
import { withTranslation, Trans } from 'react-i18next';

import useImagePreloader from '../../hooks/useImagePreloader';

import './Wedding.scss';

import restaurant from './restaurant.jpeg';
import church from './church.jpg';

const churchMap = "aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkL3YxL3BsYWNlP3E9cGxhY2VfaWQ6RWxKTmVXdG9ZV2xzWVNCSVlXbDJiM0p2Ym5OcmIyaHZJRk4wY21WbGRDd2dNaXdnV21Gc2FYTmphSGxyZVN3Z1ZHVnlibTl3YVd3bmN5ZHJZU0J2WW14aGMzUXNJRlZyY21GcGJtVXNJRFE0TmpBMElqQVNMZ29VQ2hJSlVYLUJyRVpiTVVjUnp2WG9vS3hSNlo0UUFpb1VDaElKbFR1aE5VUmJNVWNSMWFWUTM5bm1faE0ma2V5PUFJemFTeUNVUnJoT0pSU1JzYTVEU1FkczdubjlOQXY0NWQ5dzFfMA=="
const partyMap = "aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkL3YxL3BsYWNlP3E9cGxhY2VfaWQ6Q2hJSkkybFZHOHRjTVVjUmh1UXpQWHVIQllZJmtleT1BSXphU3lDVVJyaE9KUlNSc2E1RFNRZHM3bm45TkF2NDVkOXcxXzA="

const toPartMake = (data) => atob(data)
function Wedding({t}) {
  const preLoader = useImagePreloader();
  preLoader.wait(restaurant);
  preLoader.wait(church);

  return <section className="Wedding">
    <h2>
      <Trans i18nKey="ourWeddingHeader" ns="wedding">Our wedding will take place on May, 10th in Zalishchyky, Ukraine.</Trans>
    </h2>
    <div className="event">
      <h2>{t('The Church')}</h2>
      <img src={church}></img>
      <div className="agenda">
        <p><Trans i18nKey="churchAgenda" ns="wedding">We will get married in a greek catholic church at <b>12:30pm</b>.</Trans></p>
        <div className="embed-container">
          <iframe className="map" width="100%" height="450" frameborder="0" src={toPartMake(churchMap)} allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div className="event">
      <h2>{t('The Venue')}</h2>
      <img src={restaurant}></img>
      <div className="agenda">
        <p>
          <Trans i18nKey="venueAgenda" ns="wedding">
            Our celebration program will start at <b>3:30pm</b> with some aperatives in front of the venue if the weather allows it.<br></br>
            In <b>ca. an hour</b> we will have a short ceremony that will be followed by a reception and party.
          </Trans>
        </p>
        <div className="embed-container">
          <iframe className="map" width="1280" height="450" frameborder="0" src={toPartMake(partyMap)} allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </section>;
}

export default withTranslation("wedding")(Wedding);