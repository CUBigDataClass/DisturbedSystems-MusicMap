import { takeLatest, put, call } from 'redux-saga/effects';
import * as searchActions from "../actions/searchActions"
import * as searchConstants from "../../static/actionConstants"
import * as URLS from '../../static/apiConstants'
import * as rawData from '../../static/rawData'

function* fetchSuggestions(action) {
    try {
        // const response = yield call(fetch, URLS.FETCH_TITLE_SEARCH);
        // const responseBody = response.json();

    } catch (e) {
        // yield put(fetchFailed(e));
    }

    yield put(searchActions.inputChanged({value : action.value.value, results: rawData.searchSuggestions }));


}

function* fetchSuggestionsOnLyrics() {
}

function* fetchMapData(action) {
    try {
        // const response = yield call(fetch, URLS.FETCH_MAP_DATA);
        // const responseBody = response.json();

    } catch (e) {
        // yield put(fetchFailed(e));
    }

    yield put(searchActions.fetchMapDataSuccessful({ data: rawData.mapData }));
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
    yield takeLatest(searchConstants.FETCH_GOOGLE_EVENTS, fetchGoogleEvents)

}