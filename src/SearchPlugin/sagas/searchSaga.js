import {takeLatest, put, all, call} from 'redux-saga/effects';
import * as searchActions from "../actions/searchActions"
import * as searchConstants from "../../static/actionConstants"
import * as URLS from '../../static/apiConstants'
import * as rawData from '../../static/rawData'

let artistImage = 'https://react.semantic-ui.com/images/avatar/large/matthew.png';


function combineSearchResults(result1, result2, key) {
    console.log("params", result1, result2, key)

    let searchResults = {
        "isLoading": false,
        "results": {},
        "value": key
    }
    let titleSearch = {
        "name": "Title",
        "results": []

    }
    let artistSearch = {
        "name": "Artist",
        "results": []
    }
    let finalObj = {}
    let titleResults = result1.hits ? result1.hits.hits : []
    let artistResults = result2.hits ? result2.hits.hits : []

    finalObj.allResults = [].concat(titleResults).concat(artistResults)

    if (titleResults.length > 0) {
        for (let item of titleResults) {
            titleSearch.results.push({
                title: item._source ? item._source.title : "",
                description: item._source ? item._source.artist_name : ""
            })
        }
        searchResults.results.Title = titleSearch;

    }


    if (artistResults.length > 0) {

        for (let item of artistResults) {
            artistSearch.results.push({
                title: item._source ? item._source.title : "",
                description: item._source ? item._source.artist_name : ""
            })

        }
        searchResults.results.Artist = artistSearch;

    }

    finalObj.searchResults = searchResults;
    return finalObj


}

function* fetchSuggestions(action) {
    let term = action.value.value;
    if(term.length >1) {
        try {

            let resutl1 = yield fetch(URLS.FETCH_TITLE_SEARCH + term).then(response => response.json());
            let resutl2 = yield fetch(URLS.FETCH_ARTIST_SEARCH + term).then(response => response.json());

            let resultObj = combineSearchResults(resutl1, resutl2, term);
            yield put(searchActions.inputChanged({data: resultObj.searchResults}));
        } catch (e) {
            console.log("Errorrrrrrrrrrrrrrrrrrrrrrrr in title search and aritst seaerch", e)
        }
    }else {

        yield put(searchActions.inputChanged({data: {value : term, loading: false}}));

    }


}

function* fetchSuggestionsOnLyrics() {
}


function* fetchTrackData(action) {
    let term = action.value.title || "Spiderman";
    try {
        const res = yield fetch(URLS.FETCH_TRACK_DATA + term).then(response => response.json());
        yield put(searchActions.fetchTrackDataSuccessful({data: res}));
    } catch (e) {
        yield put(searchActions.fetchTrackDataFailed(e));

    }

}

function* fetchMapData(action) {
    let term = action.value.artist;
    try {
        const res = yield fetch(URLS.FETCH_MAP_DATA + term).then(response => response.json());
        yield put(searchActions.fetchMapDataSuccessful({data: res}));
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
        body: JSON.stringify({term})
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
    let image = artistImage
    try {
        const res = yield fetch(URLS.FETCH_GOOGLE_EVENTS + term).then(response => response.json());
        const items = res.map((r) => {
            r.eArtist = term;
            r.eImage = image;
            return r;
        })
        yield put(searchActions.fetchGoogleEventsSuccessful({data: items}));
    } catch (e) {
        yield put(searchActions.fetchGoogleEventsFailed(e));

    }

}


function* fetchAlbumData(action) {
    let term = action.value.artist;
    try {
        const res = yield fetch(URLS.FETCH_ALBUM + term).then(response => response.json());
        res.artistName = term;
        artistImage = res.spotifyImage;
        yield put(searchActions.fetchAlbumDataSuccessful({data: res}));
    } catch (e) {
        yield put(searchActions.fetchAlbumDataFailed(e));

    }

}

function* fetchSentimentData(action){
    let term = action.value.artist;
    try {
        // const res = yield fetch(URLS.FETCH_SENTIMENT_DATA + term).then(response => response.json());
        const res = rawData.sentimentData
        yield put(searchActions.fetchSentimentDataSuccessful({data: res}));
    } catch (e) {
        yield put(searchActions.fetchSentimentDataFailed(e));

    }



}


export default function* searchSaga() {
    yield takeLatest(searchConstants.INPUT_CHANGED_LOADING, fetchSuggestions)
    yield takeLatest(searchConstants.FETCH_MAP_DATA, fetchMapData)
    yield takeLatest(searchConstants.FETCH_SENTIMENT_DATA, fetchSentimentData)

    yield takeLatest(searchConstants.FETCh_LIVE_TWEETS, fetchLiveTweets)
    yield takeLatest(searchConstants.FETCH_ALBUM_DATA, fetchAlbumData)
    yield takeLatest(searchConstants.FETCH_GOOGLE_EVENTS, fetchGoogleEvents)
    yield takeLatest(searchConstants.FETCh_TRACK_DATA, fetchTrackData)

}