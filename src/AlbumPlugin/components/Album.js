import React from 'react'
import {Card, Icon, Progress} from 'semantic-ui-react'
import {connect} from 'react-redux'

class Album extends React.Component {

    render() {
        let artistData = this.props.artistData;
        if(!artistData.spotifyURL) {
            return null
        }
        const extra = (
            <Progress indicating label="Popularity" percent={artistData.spotifyPopularity} color='green'/>
        )

        return (
            <Card
                href={artistData.spotifyURL}
                image={artistData.spotifyImage}
                header={artistData.artistName}
                meta='Artist'
                extra={extra}
            />)
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        artistData: state.albumReducer
    }
}

export default connect(
    mapStateToProps,
)(Album)




