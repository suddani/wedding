import React, {useState} from 'react';
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Tips.scss'

import tipPicture from './tips.jpg';

function Tips({t}) {

  const weddingMailText = `mailto:info@daniel-mariia.wedding?subject=${t('Question about your wedding')}&body=${t('Hey Mariia and Daniel,%0d%0a%0d%0aGreetings')}`;

  return (
    <section className="Tips" style={{background: "url("+tipPicture+")"}}>
      <h1 style={{display: 'none'}}>Tips</h1>
      <div>
        <Trans i18nKey="gifts" ns="tips">
          <h2>Gifts</h2>
          <p>
            There is no registry.
            When you want to bring a gift, we would appreciate a contribution to our honeymoon trip that we plan to do right after the wedding.
          </p>
        </Trans>
        <Trans i18nKey="dresscode" ns="tips">
          <h2>Dresscode</h2>
          <p>
            Besides the braidsmaids and the bestmen there is no special dresscode.
          </p>
        </Trans>
        <Trans i18nKey="travelUkraine" ns="tips">
          <h2>Travel in Ukraine</h2>
          <p>
            Please check the location of the chruch wedding and the venue <Link to={'/wedding'}>here</Link>.
          </p>
        </Trans>
        <Trans i18nKey="sleepUkraine" ns="tips">
          <h3>Sleeping in Ukraine</h3>
          <p>
            Booking.com and Airbnb are both available in Ukraine.
          </p>
        </Trans>
        <Trans i18nKey="accommodations" ns="tips">
          <h3>Weeding accommodations in Zalishchyky</h3>
          <p>
            We are providing the hotel for the night after the wedding (the night from Sunday to Monday).
            In case you want to stay longer or come earlier please let us know and we will support you with booking a hotel.
          </p>
        </Trans>
        <Trans i18nKey="germany" ns="tips">
          <h3>How to get here from Germany</h3>
          <p>
            There are three airports with a good connection to the town.
            <ul>
              <li>
                Kyiv
                <p>
                  There is a direct sleep train to the town but it takes 12hrs (2:30pm - 2:40am).
                </p>
              </li>
              <li>
                Lviv
                <p>
                  There is a direct bus connection to the town.
                  However it takes 6hrs and the last bus leaves before 3pm
                  Bus tickets can be <a href="http://ticket.bus.com.ua/order/forming_bn?point_from=UA4610100000&point_to=UA6122010100&date=01.03.20&date_add=1&fn=round_search" target="_blank">bought</a> 1 week in advance.
                  <br></br>Otherwise the trip has to be done via Ternopil or Chernivtsi (there is a train connection from Lviv) and then by bus.
                </p>
              </li>
              <li>
                Chernivtsi
                <p>
                  It is only 40km away from the venue. There are a lot of bus connections as well as one train that goes once a day.
                </p>
              </li>
            </ul>
            Train tickets are available 45 days before departure and we strongly recommend to book them as soon as they are available.
            On the other hand bus tickets can be easily bought a few days before departure.
            As an alternative to both you can use BlaBlaCar since it is very popular in Ukraine.
            For short trips, for exmaple from the airport to the train station you can also use Uber.
          </p>
        </Trans>
        <Trans i18nKey="visa" ns="tips">
          <h3>Visa</h3>
          <p>
            EU citizens do not require a VISA to travel to Ukraine.
            However you need to show a valid international passport.
          </p>
        </Trans>
        <Trans i18nKey="food" ns="tips">
          <h3>Food</h3>
          <p>
            The venue we are staying at has a restaurant where you can buy food before and after the weeding party (In case you can still eat afterwards).          
          </p>
        </Trans>
        <Trans i18nKey="paypal" ns="tips">
          <h3>Paypal</h3>
          <p>
            Paypal is not available in Ukraine. It can not be used for Uber or BlaBlaCar for example.
          </p>
        </Trans>
        <Trans i18nKey="stuff" ns="tips">
          <h2>Stuff to do in Ukraine</h2>
          <p>
            If you want to travel a little bit through Ukraine we can recommend some cities depending on what you are interessted in.<br></br>
            For that please contact us but here is short list of cities and locations to consider.
            <ul>
              <li>Lviv</li>
              <li>Kviv</li>
              <li>Odessa</li>
              <li>Chernivtsi</li>
              <li>Bukovel - Mountains</li>
            </ul>
          </p>
        </Trans>
        <Trans i18nKey="anythingElse" ns="tips">
          <h2>Anything else?</h2>
          <p>
            If you have any questions, need any help or advise, please feel free to <a href={weddingMailText} target="_top">write</a> or call us.
          </p>
        </Trans>
        <Trans i18nKey="greetings" ns="tips">
          <h3>We are looking forward to seeing you.<i className="material-icons">favorite</i></h3>
        </Trans>
        <img src={tipPicture}></img>
      </div>
    </section>);
}


export default withTranslation("tips")(Tips);