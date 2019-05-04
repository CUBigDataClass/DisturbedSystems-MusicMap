import React from 'react'
import {connect} from 'react-redux'
import SpotifyPlayer from 'react-spotify-player';
import {Header, Icon} from "semantic-ui-react";


class MusicPlayer extends React.Component {

    render() {
        let trackData = this.props.data;
        let trackId =trackData.trackID;

        if(!trackId) {
            return (<div className={"musicPlayerContainer"}>
                <div>
                    <Header as='h10' icon textAlign='center'>
                        <Icon name='music' size="massive" color='blue'/>
                        <Header.Content>Music Player</Header.Content>
                    </Header>
                </div>
                <div className={"musicPlayerLoading"}>
                    <Header as='h3' textAlign='center' icon='search' content='Search for a song and we will play it for you!!' />
                </div>

            </div>)
        }
        const size = {
            width: '100%',
            height: '100%',
        };
        const view = 'coverart'; // or 'coverart'
        const theme = 'white'; // or 'white'

        return (<div className={"musicPlayerContainer"}><SpotifyPlayer
            uri={"spotify:track:" + trackData.trackID}
            size={size}
            view={view}
            theme={theme}
        /></div>)


    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        data: state.musicplayerReducer
    }
}

export default connect(
    mapStateToProps,
)(MusicPlayer)

