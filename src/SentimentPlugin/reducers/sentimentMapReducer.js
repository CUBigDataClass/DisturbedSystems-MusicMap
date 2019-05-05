import * as searchActions from '../../static/actionConstants'

export default function sentimentMapReducer(state ={loading :false}, action) {
    switch (action.type) {
        case searchActions.INPUT_ENTERED:
            state = Object.assign({loading :true});
            break;
        case searchActions.FETCH_SENTIMENT_DATA_SUCCESSFUL:
            state = Object.assign({}, action.value.data);
            break;

        case searchActions.FETCH_SENTIMENT_DATA_FAILURE:
            state = Object.assign([{}]);
            break;
    }

    return state

}