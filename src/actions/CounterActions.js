
import {INCREMENT, DECREMENT, ADD_COUNTER, REMOVE_COUNTER} from '../common/ActionTypes'

export function increment(index){
  return {
    type: INCREMENT,
    index
  }
}

export function decrement(index){
  return {
    type: DECREMENT,
    index
  }
}

export function addCounter(){
  return {
    type: ADD_COUNTER
  }
}

export function removeCounter(){
  return {
    type: REMOVE_COUNTER
  }
}
