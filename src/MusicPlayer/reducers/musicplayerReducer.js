import * as searchActions from '../../static/actionConstants'

export default function musicplayerReducer(state =[{}], action) {
    switch (action.type) {
        case searchActions.FETCh_TRACK_DATA_SUCCESSFUL:
            state = action.value.data;
            break;
    }

    return state

}