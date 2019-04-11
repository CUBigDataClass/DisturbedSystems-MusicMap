import { takeLatest, put, call } from 'redux-saga/effects';
import * as searchActions from "../actions/searchActions"
import * as searchConstants from "../../static/actionConstants"
import * as URLS from '../../static/apiConstants'

function* fetchSuggestions(action) {
    try {
        // const response = yield call(fetch, URLS.TITLE_SEARCH);
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

function* fetchMapData() {
    return;
}

function* fetchLiveTweets() {

}


function* fetchGoogleEvents() {

}


function* fetchAlbumData() {
//call Kevals service


}


export default function* searchSaga () {
    yield takeLatest(searchConstants.INPUT_CHANGED_LOADING, fetchSuggestions)
    yield takeLatest(searchConstants.FETCH_MAP_DATA, fetchMapData)
    yield takeLatest(searchConstants.FETCh_LIVE_TWEETS, fetchLiveTweets)
    yield takeLatest(searchConstants.FETCH_ALBUM_DATA, fetchAlbumData)
    yield takeLatest(searchConstants.FETCH_GOOGLE_EVENTS, fetchGoogleEvents())

}