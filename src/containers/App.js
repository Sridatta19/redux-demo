'use strict';

import React, {Component, PropTypes} from 'react'
import Counter from '../components/Counter'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CounterActions from '../actions/counterActions';

class App extends Component{
  render(){
    const {increment, decrement, addCounter, removeCounter, counters} = this.props;
    let count = 0;
    return (
      <div>
        <div>
          {counters.map(counter =>
            <Counter increment={increment} decrement={decrement}
              counter={counter} index={count++}/>
          )}
        </div>
        <br/>
        <button onClick={addCounter}>Add Counter</button>
        <button onClick={removeCounter}>Remove Counter</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    counters: state.CounterReducer
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
