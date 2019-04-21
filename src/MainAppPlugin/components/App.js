import React from 'react';
import {Grid, Image, Segment} from 'semantic-ui-react'
import Search from '../../SearchPlugin/components/Search'
import Map from "../../MapPlugin/components/Map"
import TweetStreamer from "../../TweetStreamer/components/TweetStreamer"
import EventCards from "../../EventsPlugin/components/EventCards"
import Album from "../../AlbumPlugin/components/Album"
import MusicPlayer from "../../MusicPlayer/components/MusicPlayer"

import css from "../../static/css/app.css"

export default class App extends React.Component {
    render() {
        return (
            <div  id="aGrid" className="hey">
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>

                        <Segment>
                            <Search/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Segment>
                            <Map/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <TweetStreamer/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2} >
                    <Grid.Column>
                        <Segment>
                            <Album/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment><MusicPlayer/></Segment>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={1} padded>
                    <Grid.Column>
                        <Segment>
                            <EventCards/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid></div>
        );
    }
}

