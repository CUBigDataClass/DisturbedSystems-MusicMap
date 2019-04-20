import React from 'react';
import {connect} from 'react-redux'
import * as searchConstants from "../../static/actionConstants"
import {Search} from 'semantic-ui-react'


class SearchComponent extends React.Component {

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            console.log("Enter key has been pressed to select the key")
            this.props.handleResultSelect(event, {result : {title : event.target.value, artist : event.target.value}})
        }
    }
    render() {
        // console.log("NEW PROPS SEARCH", this.props)
        return (
            <Search
                loading={this.props.isLoading}
                onResultSelect={this.props.handleResultSelect}
                onSearchChange={this.props.handleSearchChange}
                onKeyPress={this.handleKeyPress.bind(this)}
                results={this.props.results}
                value={this.props.value}
            />
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        value: state.searchReducer.value || "",
        results: state.searchReducer.results || null,
        isLoading: state.searchReducer.isLoading || false
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSearchChange: (e) => {
            dispatch({
                type: searchConstants.INPUT_CHANGED_LOADING,
                value: {isLoading: true, value: e.target.value, results: []}
            })
        },
        handleResultSelect: (e, results) => {
            let result = results.result
            //set the search bar right
            dispatch({
                type: searchConstants.INPUT_ENTERED,
                value: result
            })
            //fetch the map data
            dispatch({
                type: searchConstants.FETCH_MAP_DATA,
                value: result
            })

            //fetch live tweets
            dispatch({
                type: searchConstants.FETCh_LIVE_TWEETS,
                value: result
            })

            //fetch the album data
            dispatch({
                type: searchConstants.FETCH_ALBUM_DATA,
                value: result
            })

            //fetch live tweets
            dispatch({
                type: searchConstants.FETCh_TRACK_DATA,
                value: result
            })

            //fetch google event data
            dispatch({
                type: searchConstants.FETCH_GOOGLE_EVENTS,
                value: result
            })


        }
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchComponent)




