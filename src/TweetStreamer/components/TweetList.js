import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import socketIOClient from "socket.io-client";
import Tweet from 'react-tweet'
import * as searchConstants from "../../static/actionConstants";
import connect from "react-redux/es/connect/connect";


class TweetList extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        const socket = socketIOClient('http://localhost:3001/');

        socket.on('connect', () => {
            console.log("Socket Connected");
            socket.on("tweets", data => {
                console.info(data);
                this.props.twitterDataArrived(data);
            });
        });
        socket.on('disconnect', () => {
            socket.off("tweets")
            socket.removeAllListeners("tweets");
            console.log("Socket Disconnected");
        });
    }


    render() {
        let items = this.props.items;

        let itemsCards = <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {items.map((x, i) =>
                <Tweet key={i} data={x}/>
            )}
        </CSSTransitionGroup>

        let loading = <div>
            <p className="flow-text">Looking for live tweets!! Hold on.</p>
            <div className="progress lime lighten-3">
                <div className="indeterminate pink accent-1"></div>
            </div>
        </div>

        return (
            <div className=" tweet-body row">
                <div className="col s12 m4 l4">
                    <div>
                        {
                            items.length > 0 ? itemsCards : loading
                        }

                    </div>

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        items: state.tweetStreamerReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        twitterDataArrived: (data) => {
            dispatch({
                type: searchConstants.TWEET_DATA_ARRIVED,
                value: data
            })
        }}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TweetList)




