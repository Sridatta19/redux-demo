
import {INCREMENT, DECREMENT, ADD_COUNTER, REMOVE_COUNTER} from '../common/ActionTypes'

let initialState = [0, 0, 0]

export default function CounterReducer(state=initialState, action){
  let {index, type} = action;
  let {length} = state;
  switch(type){
    case INCREMENT:
      return counter(state, action)
    case DECREMENT:
      return counter(state, action)
    case ADD_COUNTER:
      return [
        ...state,
        0
      ]
    case REMOVE_COUNTER:
      return [
        ...state.slice(0, length-1)
      ]
    default:
      return state
  }
}

function counter(state, action){
  let {index, type} = action;
    switch(type){
      case INCREMENT:
        return [
          ...state.slice(0, index),
          state[index] + 1,
          ...state.slice(index + 1)
        ]
      case DECREMENT:
        return [
          ...state.slice(0, index),
          state[index] - 1,
          ...state.slice(index + 1)
        ]
      default:
        return state;
  }
}
