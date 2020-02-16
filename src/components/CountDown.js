import React from 'react';

import useInterval from '../hooks/useInterval';

export default function CountDown(props) {
  const countDownDate = Date.parse("2020-05-10T08:00:00Z");
  function generateCounter() {
    var distance = countDownDate - new Date().getTime();

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
  }

  const [counter, setCounter] = React.useState(generateCounter());

  useInterval(() => setCounter(generateCounter()), 1000);

  return <span className={props.className}>{counter}</span>;
}
