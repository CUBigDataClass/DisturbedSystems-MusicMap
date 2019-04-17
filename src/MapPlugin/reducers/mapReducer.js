import * as searchActions from '../../static/actionConstants'

export default function mapReducer(state =[{}], action) {
    console.log(action, action.type)
    switch (action.type) {
        case searchActions.FETCH_MAP_DATA_SUCCESSFUL:
            state = action.value.data;
    }

    return state

}