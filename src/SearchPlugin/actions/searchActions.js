import * as searchActions from "../../static/constants";


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

