import React from 'react'
import {connect} from 'react-redux'
import SpotifyPlayer from 'react-spotify-player';


class MusicPlayer extends React.Component {

    render() {
        let trackData = this.props.data;
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

