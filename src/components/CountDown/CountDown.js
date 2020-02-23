import React from 'react';

import useInterval from '../../hooks/useInterval';

import './CountDown.scss';

export default function CountDown(props) {
  const countDownDate = Date.parse("2020-05-10T12:30:00Z");
  function generateCounter() {
    var distance = countDownDate - new Date().getTime();

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // return days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
    return [days, hours, minutes, seconds];
  }

  const [counter, setCounter] = React.useState(generateCounter());

  useInterval(() => setCounter(generateCounter()), 1000);

  return <span className={[props.className, "CountDown"].filter(i=>i).join(' ')}>
    <span className="days info_data">{counter[0]}</span><span className="days_text info_text">Days</span>
    <span className="hours info_data">{counter[1]}</span><span className="hours_text info_text">Hours</span>
    <span className="minutes info_data">{counter[2]}</span><span className="minutes_text info_text">Minutes</span>
    <span className="seconds info_data">{counter[3]}</span><span className="seconds_text info_text">Seconds</span>
  </span>;
}
