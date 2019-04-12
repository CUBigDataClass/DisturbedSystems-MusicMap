import { combineReducers } from 'redux'
import welcomeReducer from '../WelcomePlugin/reducers/welcomeReducer'
import searchReducer from "../SearchPlugin/reducers/searchReducer"
import mapReducer from "../MapPlugin/reducers/mapReducer"
import albumReducer from "../AlbumPlugin/reducers/albumReducer"

export default combineReducers({
    welcomeReducer,
    searchReducer,
    mapReducer
})