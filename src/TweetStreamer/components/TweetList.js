import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import socketIOClient from "socket.io-client";
import Tweet from 'react-tweet'
import * as searchConstants from "../../static/actionConstants";
import connect from "react-redux/es/connect/connect";

import {Loader, Icon, Header} from "semantic-ui-react"


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

        let loading = <Loader active size='medium'>Fetching Live Tweets!!</Loader>


        return (
            <div className={"tweetsContainer"}>
                <div>
                    <Header as='h4'  icon textAlign='center'>
                        <Icon name='twitter' size="huge" color='blue' />
                        <Header.Content>Live Tweets</Header.Content>
                    </Header>
                </div>
                    <div className={"tweets"}>
                        {
                            items.length > 0 ? itemsCards : loading
                        }

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




