import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import socketIOClient from "socket.io-client";
import CardComponent from './CardComponent';
import Tweet from 'react-tweet'


export default class TweetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], searchTerm: "JavaScript" };
    }

    handleChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.handleResume();
        }
    }

    handleResume() {
        let term = this.state.searchTerm;
        fetch("http://localhost:3001/setSearchTerm",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ term })
            })
    }

    handlePause(event) {
        fetch("http://localhost:3001/pause",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    }

    componentDidMount() {
        const socket = socketIOClient('http://localhost:3001/');

        socket.on('connect', () => {
            console.log("Socket Connected");
            socket.on("tweets", data => {
                console.info(data);
                let newList = [data].concat(this.state.items.slice(0, 15));
                this.setState({ items: newList });
            });
        });
        socket.on('disconnect', () => {
            socket.off("tweets")
            socket.removeAllListeners("tweets");
            console.log("Socket Disconnected");
        });
    }


    render() {
        let items = this.state.items;

        let itemsCards = <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {items.map((x, i) =>
                <Tweet key={i} data={x} />
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


