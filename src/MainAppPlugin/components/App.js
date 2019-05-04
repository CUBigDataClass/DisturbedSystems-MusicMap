import React from 'react';
import {Grid, Image, Segment} from 'semantic-ui-react'
import Search from '../../SearchPlugin/components/Search'
import Map from "../../MapPlugin/components/Map"
import TweetStreamer from "../../TweetStreamer/components/TweetStreamer"
import EventCards from "../../EventsPlugin/components/EventCards"
import Album from "../../AlbumPlugin/components/Album"
import MusicPlayer from "../../MusicPlayer/components/MusicPlayer"
import SentimentMap from "../../SentimentPlugin/components/SentimentMap"
import css from "../../static/css/app.css"

export default class App extends React.Component {
    render() {
        return (
            <div className="gridContainer">
                <Grid padded>
                    <Grid.Row columns={1} className="topcolumn">
                        <Grid.Column>
                            <Search/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={3}>
                        <Grid.Column className="albumnew">
                            <Segment>
                                <Album/>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment className="musicplayer"><MusicPlayer/></Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment className="sentimentmap"><SentimentMap/></Segment>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={2}>
                        <Grid.Column width={10}>
                            <Segment className="map">
                                <Map/>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Segment className="tweetsNew">
                                <TweetStreamer/>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={1} padded>
                        <Grid.Column>
                            {/*<Segment>*/}
                            <EventCards/>
                            {/*</Segment>*/}
                        </Grid.Column>
                    </Grid.Row>
                </Grid></div>
        );
    }
}

