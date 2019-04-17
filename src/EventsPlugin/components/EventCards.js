import React from 'react';
import {connect} from 'react-redux'


class EventCards extends React.Component {

    render() {
        return (
            <div></div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        cards: state.eventCardsReducer
    }
}

export default connect(
    mapStateToProps,
)(EventCards)

