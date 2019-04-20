import React from 'react'
import {connect} from 'react-redux'
import SpotifyPlayer from 'react-spotify-player';


class MusicPlayer extends React.Component {

    render() {
        const size = {
            width: '100%',
            height: 300,
        };
        const view = 'list'; // or 'coverart'
        const theme = 'black'; // or 'white'

        return <SpotifyPlayer
            uri="spotify:track:3KkXRkHbMCARz0aVfEt68P"
            size={size}
            view={view}
            theme={theme}
        />


    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        data: state
    }
}

export default connect(
    mapStateToProps,
)(MusicPlayer)

