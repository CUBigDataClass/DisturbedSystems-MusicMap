import
{ combineReducers } from 'redux'
import welcomeReducer from '../WelcomePlugin/reducers/welcomeReducer'
import searchReducer from "../SearchPlugin/reducers/searchReducer"
import mapReducer from "../MapPlugin/reducers/mapReducer"
import albumReducer from "../AlbumPlugin/reducers/albumReducer"
import tweetStreamerReducer from "../TweetStreamer/reducers/tweetStreamerReducer"
export default combineReducers({
    welcomeReducer,
    searchReducer,
    mapReducer,
    tweetStreamerReducer
})