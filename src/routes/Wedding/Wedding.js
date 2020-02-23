import React from 'react';
import { withTranslation } from 'react-i18next';

import './Wedding.css';

import restaurant from './restaurant.jpeg';
import church from './church.jpg';

const churchMap = "aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkL3YxL3BsYWNlP3E9cGxhY2VfaWQ6RWxKTmVXdG9ZV2xzWVNCSVlXbDJiM0p2Ym5OcmIyaHZJRk4wY21WbGRDd2dNaXdnV21Gc2FYTmphSGxyZVN3Z1ZHVnlibTl3YVd3bmN5ZHJZU0J2WW14aGMzUXNJRlZyY21GcGJtVXNJRFE0TmpBMElqQVNMZ29VQ2hJSlVYLUJyRVpiTVVjUnp2WG9vS3hSNlo0UUFpb1VDaElKbFR1aE5VUmJNVWNSMWFWUTM5bm1faE0ma2V5PUFJemFTeUNVUnJoT0pSU1JzYTVEU1FkczdubjlOQXY0NWQ5dzFfMA=="
const partyMap = "aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkL3YxL3BsYWNlP3E9cGxhY2VfaWQ6Q2hJSkkybFZHOHRjTVVjUmh1UXpQWHVIQllZJmtleT1BSXphU3lDVVJyaE9KUlNSc2E1RFNRZHM3bm45TkF2NDVkOXcxXzA="

const toPartMake = (data) => atob(data)
function Wedding({t}) {
  return <section className="Wedding">
    <div className="event">
      <h2>The Church</h2>
      <img src={church}></img>
      <div className="agenda">
        <p>We are getting married</p>
        <ul>
          <li>12:30pm Church Wedding</li>
        </ul>
        <div className="embed-container">
          <iframe className="map" width="100%" height="450" frameborder="0" src={toPartMake(churchMap)} allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div className="event">
      <h2>The Restaurant</h2>
      <img src={restaurant}></img>
      <div className="agenda">
        <p>Our afternoon programm</p>
        <ul>
          <li>15:30pm Aperatives</li>
          <li>16:30pm Ceremony</li>
          <li>17:30pm Reception</li>
        </ul>
        <div className="embed-container">
          <iframe className="map" width="1280" height="450" frameborder="0" src={toPartMake(partyMap)} allowfullscreen></iframe>
        </div>
      </div>
    </div>
    {/* <div className="banner" style={{backgroundImage: `url(${restaurant})`}}></div>
    <div className="text">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </div>
    <iframe width="1280" height="450" frameborder="0" src={toPartMake(church)} allowfullscreen></iframe>
    <div className="text">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </div>
    <iframe width="1280" height="450" frameborder="0" src={toPartMake(party)} allowfullscreen></iframe> */}
  </section>;
}

export default withTranslation("wedding")(Wedding);