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
            The biggest gift for us is you attending.
            But if you really want to bring something, we would appreciate a contribution to our honeymoon trip which we plan to do right after the wedding.
          </p>
        </Trans>
        <Trans i18nKey="dresscode" ns="tips">
          <h2>Dress code</h2>
          <p>
            Apart from the bridesmaids and the groomsmen, there is no special dress code for the guests.
          </p>
        </Trans>
        <Trans i18nKey="travelUkraine" ns="tips">
          <h2>Travel in Ukraine</h2>
          <p>
          Please check the location of the church and the venue where the wedding will take place <Link to={'/wedding'}>here</Link>.
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
            In case you want to stay longer or come earlier, please let us know and we will support you with booking a hotel.
          </p>
        </Trans>
        <Trans i18nKey="germany" ns="tips">
          <h3>How to get to Zalishchyky from Germany</h3>
          <p>
            There are three airports with a good connection to the town.
            <ul>
              <li>
                Kyiv
                <p>
                  There is a direct sleep train to the town, but it takes 12 hours (2:30pm - 2:40am).
                </p>
              </li>
              <li>
                Lviv
                <p>
                  There is a direct bus connection to the town.
                  However, the bus takes 6 hours and the last one leaves before 3pm.
                  <br></br>Otherwise the trip has to be done via Ternopil or Chernivtsi (there is a train connection from Lviv) and then by bus.
                </p>
              </li>
              <li>
                Chernivtsi
                <p>
                  It is only 40km away from the venue. There are a lot of bus connections as well as a train that goes once a day.
                </p>
              </li>
            </ul>
            Train tickets are <a href="https://booking.uz.gov.ua/en/">available</a> 45 days before the departure date and we strongly recommend to book them as soon as they are available.
            At the same time, bus tickets can be easily <a href="http://ticket.bus.com.ua/order/forming_bn?point_from=UA4610100000&point_to=UA6122010100&date=01.03.20&date_add=1&fn=round_search" target="_blank">bought</a> a few days before the departure date.
            As an alternative to both, you can use BlaBlaCar since it is very popular in Ukraine.
            For short trips (for example, from the airport to the train station) you can also use Uber.
            <br></br>
            If you plan to use public transportation please let us know when and where (Ternopil or Chernivtsi) you plan to be.
            We will help you to book a group ticket with other guests together.
          </p>
        </Trans>
        <Trans i18nKey="visa" ns="tips">
          <h3>Visa</h3>
          <p>
            EU citizens are not required to have a VISA to travel to Ukraine.
            However, you need to show a valid international passport.
          </p>
        </Trans>
        <Trans i18nKey="food" ns="tips">
          <h3>Food</h3>
          <p>
            The venue of the wedding has a Café where you can buy food.
          </p>
        </Trans>
        <Trans i18nKey="paypal" ns="tips">
          <h3>Paypal</h3>
          <p>
            Paypal is not available in Ukraine. It cannot be used for Uber or BlaBlaCar, for example.
          </p>
        </Trans>
        <Trans i18nKey="stuff" ns="tips">
          <h2>Stuff to do in Ukraine</h2>
          <p>
            If you want to travel a little bit through Ukraine, we can recommend a few cities depending on what you are interested in.<br></br>
            Please do contact us if you have any questions about where to go in Ukraine but here is a short list of cities and locations you can start with.
            <ul>
              <li>Lviv</li>
              <li>Kyiv</li>
              <li>Odesa</li>
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