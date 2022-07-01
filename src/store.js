import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'
import {
  sayHiOnDispatch,
  includeMeaningOfLife,
} from './exampleAddons/enhancers'
import { print1, print2, print3 } from './exampleAddons/middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewareEnhancer = applyMiddleware(print1, print2, print3)
// const composedEnhancer = composeWithDevTools(
// EXAMPLE: Add whatever middleware you actually want to use here
// applyMiddleware(print1, print2, print3)
// other store enhancers if any
// )

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, composedEnhancer)

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

// const store = createStore(rootReducer, undefined, composedEnhancer)

export default store
