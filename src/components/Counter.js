'use strict';

import React, {Component, PropTypes} from 'react'

class Counter extends Component {

  incrementCount = () => {
      this.props.increment(this.props.index)
  }

  decrementCount = () => {
      this.props.decrement(this.props.index)
  }

  render(){
    const {increment, decrement, counter} = this.props;
    return(
      <div>
          <h1>{counter}</h1>
          <button onClick={this.incrementCount}>+</button>
          <button onClick={this.decrementCount}>-</button>
      </div>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
}

export default Counter;
