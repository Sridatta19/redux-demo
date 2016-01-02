
import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

const createFinalStore = applyMiddleware(
  thunk
)(createStore)

export default function configureStore(initialState){
  const store = createFinalStore(rootReducer, initialState)

  if(module.hot){
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store;
}
