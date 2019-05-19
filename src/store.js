import {PostsReducer} from './reducers/reducers'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

const middleware = applyMiddleware(logger)

export default createStore(PostsReducer, middleware)