import { combineReducers } from 'redux'
import welcomeReducer from '../WelcomePlugin/reducers/welcomeReducer'
import searchReducer from "../SearchPlugin/reducers/searchReducer"

export default combineReducers({
    welcomeReducer,
    searchReducer
})