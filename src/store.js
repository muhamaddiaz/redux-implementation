import Reducers from './reducers/reducers'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

const middleware = applyMiddleware(logger)

export default createStore(Reducers, middleware)