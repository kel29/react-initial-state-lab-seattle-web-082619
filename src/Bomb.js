import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  countDown = () => {
    let secs = this.state.secondsLeft
    console.log(this.state.secondsLeft)
    if (secs) {
     return <p>{secs} seconds left before I go boom!</p>
    } else { 
      return <h2>Boom!</h2>
    }
  }

  render() {
    return <div>{this.countDown()}</div>
  }
}
