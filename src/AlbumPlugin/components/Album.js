import React from 'react'
import {Card, Icon, Progress} from 'semantic-ui-react'
import {connect} from 'react-redux'

class Album extends React.Component {

    render() {
        let artistData = this.props.artistData;
        if (!artistData.spotifyURL) {
            return (<div className={"albumContainer"}></div>)
            l
        }
        const extra = (
            <Progress indicating label="Popularity" percent={artistData.spotifyPopularity} color='green'/>
        )

        return (
            <div className={"albumContainer"}>
                <Card
                    href={artistData.spotifyURL}
                    image={artistData.spotifyImage}
                    header={artistData.artistName}
                    meta='Artist'
                    extra={extra}
                />
            </div>)
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




