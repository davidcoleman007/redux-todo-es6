import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoAppState = combineReducers({
  todos,
  visibilityFilter
})

export default todoAppState;
