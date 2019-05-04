import React from 'react'
import {Card, Header, Icon, Progress, Segment, List} from 'semantic-ui-react'
import {connect} from 'react-redux'

class Album extends React.Component {

    render() {
        let artistData = this.props.artistData;

        if (!artistData.spotifyURL) {
            return (<div className={"albumContainer"}>
                <div>
                    <Header as='h10' icon textAlign='center'>
                        <Icon name='id card' size="massive" color='blue'/>
                        <Header.Content>Artist/Song Details</Header.Content>
                    </Header>
                </div>
                <div className={"albumLoading"}>
                    <Header as='h3' textAlign='center' icon='search' content='Search to find out about the Artist!!'/>
                </div>

            </div>)

        }
        const extra = (
            <Progress indicating label="Popularity" percent={artistData.spotifyPopularity} color='green'/>
        )

        return (<div className={"albumContainer"}>
            <Segment className={"cardContainer"}>
            <Card
                href={artistData.spotifyURL}
                image={artistData.spotifyImage}
                header={artistData.artistName}
                meta='Artist'
                extra={extra}
            /></Segment>

            <Segment className ={"listContainer"} inverted>
                <List divided inverted relaxed>
                    <List.Item>
                        <List.Content>
                            <List.Header>Artist</List.Header><span>
                            {artistData.artistName}</span>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>Track</List.Header>
                            {artistData.fullName}
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>Album </List.Header>
                            {artistData.albumName}
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>Duration</List.Header>
                            {artistData.duration}
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>Release Date</List.Header>
                            {artistData.albumRelease}
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header>ISRC</List.Header>
                            {artistData.isrc}
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
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




