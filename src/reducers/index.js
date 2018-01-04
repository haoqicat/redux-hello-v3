import { combineReducers } from 'redux'
import comments from './comments'
import posts from './posts'

const rootReducer = combineReducers({
  comments,
  posts
})

export default rootReducer
