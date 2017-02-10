import { combineReducers } from 'redux'
import notes from './Notes'

const todoApp = combineReducers({
    notes
})

export default todoApp