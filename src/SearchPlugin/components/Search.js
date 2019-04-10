import React from 'react';
import {connect} from 'react-redux'
import * as searchConstants from "../../static/constants"
import { Search } from 'semantic-ui-react'



const mapStateToProps = (state, ownProps) => {
    return {
        value: state.searchReducer.value || "",
        results : state.searchReducer.results || null,
        isLoading :state.searchReducer.isLoading || false
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSearchChange: (e) =>
            dispatch({
                value:  {isLoading : true, value: e.target.value, results:[]},
                type: searchConstants.INPUT_CHANGED_LOADING
            }),
        handleResultSelect: (e) =>
            dispatch({
                type: searchConstants.INPUT_CHANGED,
                value:  {isLoading : true, value: e.target.value, results:[]}
            })
    }
}





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




