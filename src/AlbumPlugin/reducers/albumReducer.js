import * as searchActions from '../../static/actionConstants'

export default function albumReducer(state = {}, action) {
    // console.log("Action:",  action)
    switch (action.type) {
        case searchActions.INPUT_ENTERED:
            state = Object.assign({}, {isLoading: false}, {value: action.value.title})
            break;
        case searchActions.FETCH_ALBUM_DATA_SUCCESSFUL:
            state = Object.assign({}, action.value.data)

            break;
        case searchActions.FETCH_ALBUM_DATA_FAILED:
            state = Object.assign({})

            break;
    }

    return state

}