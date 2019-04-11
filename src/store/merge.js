import { combineReducers } from 'redux'
import welcomeReducer from '../WelcomePlugin/reducers/welcomeReducer'
import searchReducer from "../SearchPlugin/reducers/searchReducer"
import mapReducer from "../MapPlugin/reducers/mapReducer"

export default combineReducers({
    welcomeReducer,
    searchReducer,
    mapReducer
})