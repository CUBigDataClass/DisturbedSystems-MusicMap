import { takeLatest, put, call } from 'redux-saga/effects';
import * as searchActions from "../actions/searchActions"
import * as searchConstants from "../../static/constants"


function* fetchSuggestions(action) {
    try {
        //
        // const response = yield call(fetch, 'https://api.service.com/endpoint');
        // const responseBody = response.json();

        yield put(searchActions.inputChanged({value : action.value.value,"results": [
        {
            "title": "Krajcik Group",
            "description": "Customer-focused executive portal",
            "image": "https://s3.amazonaws.com/uifaces/faces/twitter/LucasPerdidao/128.jpg",
            "price": "$54.65"
        },
        {
            "title": "Fisher, Ward and Hagenes",
            "description": "Progressive background capability",
            "image": "https://s3.amazonaws.com/uifaces/faces/twitter/robergd/128.jpg",
            "price": "$59.93"
        },
        {
            "title": "Satterfield, Rice and Gerhold",
            "description": "Integrated static migration",
            "image": "https://s3.amazonaws.com/uifaces/faces/twitter/chatyrko/128.jpg",
            "price": "$19.26"
        }
    ],}));

    } catch (e) {
        // yield put(fetchFailed(e));
        return;
    }


}

function* fetchSuggestionsOnLyrics() {
}

//call Kevals service
function* fetchGeoTweetData() {

}



export default function* searchSaga () {
    yield takeLatest(searchConstants.INPUT_CHANGED_LOADING, fetchSuggestions)
    yield takeLatest(searchConstants.INPUT_ENTERED, fetchSuggestions)

}