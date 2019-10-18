import React, { Component } from 'react';
import { format } from 'date-fns';

import { ClockDiv } from './styles';

class Clock extends Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    const day = format(this.state.time, 'hh:mm:ss');
    const time = format(Date.now(), 'dd/MM/yyyy');

    return (
      <ClockDiv>
        <span className="date">{day}</span>
        <span className="clock">{time}</span>
      </ClockDiv>
    );
  }
}

export default Clock;
