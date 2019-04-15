import React, { Component } from 'react';
import '../css/app.css';
import TweetList from './TweetList';

export default class TweetStreamer extends Component {
    render() {
        return (
                <TweetList/>
        );
    }
}

