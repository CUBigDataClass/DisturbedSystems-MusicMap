import * as searchActions from '../../static/actionConstants'

export default function mapReducer(state =[{}], action) {
    switch (action.type) {
        case searchActions.FETCH_MAP_DATA_SUCCESSFUL:
            state = action.value.data;
        default:
            return state
    }

    return state

}