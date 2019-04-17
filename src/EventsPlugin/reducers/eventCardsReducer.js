import * as searchActions from '../../static/actionConstants'

export default function eventCardsReducer(state =[], action) {
    // console.log("Action:",  action)
    switch (action.type) {
        case searchActions.INPUT_ENTERED:
            state = Object.assign([]);
            break;
        case searchActions.FETCH_GOOGLE_EVENTS_SUCCESSFUL:
            state = Object.assign([], action.value.data)
            break;
        case searchActions.FETCH_GOOGLE_EVENTS_FAILED:
            state = Object.assign([])
            break;
        default:
            return state
    }

    return state

}