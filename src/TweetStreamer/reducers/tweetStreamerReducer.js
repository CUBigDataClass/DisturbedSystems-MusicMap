import * as searchActions from '../../static/actionConstants'

export default function tweetStreamerReducer(state =[], action) {
    // console.log("Action:",  action)
    switch (action.type) {
        case searchActions.FETCh_LIVE_TWEETS_SUCCESSFUL:
            state = Object.assign([])
            break;
        case searchActions.FETCh_LIVE_TWEETS_FAILED:
            console.log("Fetching the live tweet failed to set the topic for action", action.value)
            state = Object.assign([])
            break;
        case searchActions.TWEET_DATA_ARRIVED:
            let newList = [action.value].concat(state.slice(0, 15));
            state = newList;
        default:
            return state
    }

    return state

}