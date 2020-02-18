import React from 'react';
import { withTranslation } from 'react-i18next';

import './Wedding.css';

import restaurant from './restaurant.jpeg';

function Wedding({t}) {
  return <section className="Wedding">
    <div className="banner" style={{backgroundImage: `url(${restaurant})`}}></div>
    <div className="text">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </div>
    <iframe width="1280" height="450" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ElJNeWtoYWlsYSBIYWl2b3JvbnNrb2hvIFN0cmVldCwgMiwgWmFsaXNjaHlreSwgVGVybm9waWwncydrYSBvYmxhc3QsIFVrcmFpbmUsIDQ4NjA0IjASLgoUChIJUX-BrEZbMUcRzvXooKxR6Z4QAioUChIJlTuhNURbMUcR1aVQ39nm_hM&key=AIzaSyBChgGsTw5F1sOi5_M_KeotNVVoE_K_2zM" allowfullscreen></iframe>
  </section>;
}

export default withTranslation("wedding")(Wedding);