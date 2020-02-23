import React, {useState} from 'react';
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Tips.scss'

import tipPicture from './tips.jpg';

function Tips({t}) {
  return (
    <section className="Tips" style={{background: "url("+tipPicture+")"}}>
      <h1 style={{display: 'none'}}>Tips</h1>
      <div>
        <h2>Travel in Ukraine</h2>
        <p>
          Please check the location of the chruch wedding and the venue <Link to={'/wedding'}>here</Link>.
        </p>
        <h3>Sleeping in Ukraine</h3>
        <p>
          Booking.com and Airbnb are both available in Ukraine.
        </p>
        <h3>Weeding accommodations in Zalishchyky</h3>
        <p>
          We are providing the hotel for the night after the wedding (the night from Sunday to Monday).
          In case you want to stay longer or come earlier please let us know and we will support you with booking a hotel.
        </p>
        <h3>How to get here from Germany</h3>
        <p>
          There are three airports with a good connection to the town.
          <ul>
            <li>
              Kyiv
              <p>
                There is a direct sleep train to the town but it takes 12hrs(2:30pm - 2:40am).
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
        <h3>Visa</h3>
        <p>
          EU citizens do not require a VISA to travel to Ukraine.
          However you need to show a valid international passport.
        </p>
        <h3>Food</h3>
        <p>
          The restaurant we are staying at has a restaurant where you can buy food before and after the weeding party (In case you can still eat afterwards).
        </p>
        <h3>Paypal</h3>
        <p>
          Paypal is not available in UKraine. It can not be used for Uber or BlaBlaCar for example.
        </p>
        <h2>Stuff to do in Ukraine</h2>
        <p>Amet mollit cillum quis non sunt laborum duis Lorem. Commodo reprehenderit irure fugiat anim Lorem esse enim culpa sunt adipisicing amet. Esse et ex ipsum proident labore. Id consequat aliquip sint nisi proident esse ad magna elit elit. Quis ad velit tempor ad enim sunt. Cillum sint eu commodo esse id.</p>
        <img src={tipPicture}></img>
      </div>
    </section>);
}


export default withTranslation("tips")(Tips);