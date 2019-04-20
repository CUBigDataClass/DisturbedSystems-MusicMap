import * as searchActions from '../../static/actionConstants'

export default function searchReducer(state ={}, action) {
    // console.log("Action:",  action)
switch (action.type) {
    case searchActions.INPUT_CHANGED_LOADING:
        state = Object.assign({}, {isLoading:true}, action.value)
        break;
    case searchActions.INPUT_CHANGED:
        state = Object.assign({},{isLoading:false}, action.value)
        break;
    case searchActions.INPUT_ENTERED:
        state = Object.assign({},{isLoading: false}, {value : action.value.title})
        break;
    case searchActions.LYRICS_SWITCHED_ON:
        state = Object.assign({}, action.value)
        break;
    case searchActions.LYRICS_SWITCHED_OFF:
        state = Object.assign({}, action.value)
        break;
    default:
        return state
}

return state

}