import * as searchActions from "../../static/actionConstants";


export function inputChanged(value) {
    return {
        type: searchActions.INPUT_CHANGED,
        value: value

    }
}


export function inputChangedLoading(value) {
    return {
        type: searchActions.INPUT_CHANGED_LOADING,
        value: value

    }
}

export function inputEntered(value) {
    return {
        type: searchActions.INPUT_ENTERED,
        value: value

    }
}


export function lyricsSwitchedOn(value) {
    return {
        type: searchActions.LYRICS_SWITCHED_ON,
        value: value

    }
}


export function lyricsSwitchedOff(value) {
    return {
        type: searchActions.LYRICS_SWITCHED_OFF,
        value: value

    }
}



export function fetchMapData(value) {
    return {
        type : searchActions.FETCH_MAP_DATA,
        value : value
    }
}


export function fetchAlbumData(value) {
    return {
        type : searchActions.FETCH_ALBUM_DATA,
        value : value
    }
}

export function fetchLiveTweets(value) {
    return {
        type : searchActions.FETCh_LIVE_TWEETS,
        value : value
    }
}

export function fetchGoogleEvents(value) {
    return {
        type : searchActions.FETCH_GOOGLE_EVENTS,
        value : value
    }
}






