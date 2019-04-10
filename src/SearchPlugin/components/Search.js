import React from 'react';
import {connect} from 'react-redux'
import * as searchConstants from "../../static/actionConstants"
import {Search} from 'semantic-ui-react'


class SearchComponent extends React.Component {
    render() {
        return (
            <Search
                loading={this.props.isLoading}
                onResultSelect={this.props.handleResultSelect}
                onSearchChange={this.props.handleSearchChange}
                results={this.props.results}
                value={this.props.value}
                {...this.props}
            />
        );
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchComponent)


const mapStateToProps = (state, ownProps) => {
    return {
        value: state.searchReducer.value || "",
        results: state.searchReducer.results || null,
        isLoading: state.searchReducer.isLoading || false
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSearchChange: (e) =>
            dispatch({
                value: {isLoading: true, value: e.target.value, results: []},
                type: searchConstants.INPUT_CHANGED_LOADING
            }),
        handleResultSelect: (e) => {
            let key = e.target.value;
            //set the search bar right
            dispatch({
                type: searchConstants.INPUT_CHANGED,
                value: key
            })
            //fetch the map data
            dispatch({
                type: searchConstants.FETCH_MAP_DATA,
                value: key
            })

            //fetch the album data
            dispatch({
                type: searchConstants.FETCH_ALBUM_DATA,
                value: key
            })
            //fetch google event data
            dispatch({
                type: searchConstants.FETCH_GOOGLE_EVENTS,
                value: key
            })
        }
    }

}


}

//make the call for mapdata

}
}

