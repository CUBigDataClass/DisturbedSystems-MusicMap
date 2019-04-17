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


function* fetchGoogleEvents(action) {
    let term = action.value.artist;
    let image = "https://i.scdn.co/image/60c4daa4721f666c6afaee82a39bd413979a0474";
    try {
        const res = yield fetch(URLS.FETCH_GOOGLE_EVENTS + term).then(response => response.json());
        const items = res.map((r) => {
            r.eArtist =term;
            r.eImage =image;

            return r;
        })
        yield put(searchActions.fetchGoogleEventsSuccessful({ data:items }));
    } catch (e) {
        yield put(searchActions.fetchGoogleEventsFailed(e));

    }

    // const items = rawData.events.map((r) => {
    //     r.eArtist =term;
    //     r.eImage =image;
    //
    //     return r;
    // })
    //
    // yield put(searchActions.fetchGoogleEventsSuccessful({ data:items }));


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