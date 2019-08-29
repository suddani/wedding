import React from 'react';

export default class CountDown extends React.Component {
  
  constructor(props) {
    super(props);
    this.countDownDate = new Date("5 10, 2020 08:00:00").getTime();
    this.state = {
      counter: this.generateCounter()
    };
  }
  render() {
    return <span>{this.state.counter}</span>
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  generateCounter() {
    var distance = this.countDownDate - new Date().getTime();

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log("Generate");

    return days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
  }

  tick = () => {
    this.setState( {
      counter: this.generateCounter()
    })
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
