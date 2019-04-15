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
    let term = action.value.artist;
    try {
        const res = yield fetch(URLS.FETCH_MAP_DATA + term).then(response => response.json());
        yield put(searchActions.fetchMapDataSuccessful({ data:res }));
    } catch (e) {
        yield put(searchActions.fetchMapDataFailed(e));

    }


}

function* fetchLiveTweets(action) {
    let term = action.value.artist || "eminem";//get the artist name
    let headers = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ term })
    };

    try {
        yield call(fetch, URLS.FETCH_LIVE_TWEETS, headers);
        yield put(searchActions.fetchLiveTweetsSuccessful(""));
    } catch (err) {
        yield put(searchActions.fetchLiveTweetsFailed(""));
    }
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