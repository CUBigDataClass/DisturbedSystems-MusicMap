import React from 'react';
import {connect} from 'react-redux'
import {Card, Flag, Image} from 'semantic-ui-react'

class EventCards extends React.Component {

    render() {
        let events = this.props.events;

        return (
            <Card.Group centered>
                {
                    events.map((event) => {
                        return (<Card className="eventcard">
                            <Card.Content>
                                <Image floated='right' size='mini'
                                       src={event.eImage}/>
                                <Card.Header>{event.eTitle}</Card.Header>
                                <Card.Meta>{event.eDate}</Card.Meta>
                                <Card.Description>
                                    {event.eTitle + " by " + event.eArtist + " at " + event.eLocation + " on " + event.eDate}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Flag name={event.eCountry.toLowerCase()}/> {event.eLocation}
                            </Card.Content>
                        </Card>)
                    })
                }
            </Card.Group>)
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        events: state.eventCardsReducer
    }
}

export default connect(
    mapStateToProps,
)(EventCards)

