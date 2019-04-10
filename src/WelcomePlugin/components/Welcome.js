import React from 'react';
import {connect} from 'react-redux'


class Welcome extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Welcome</h1>
                <p>Hello {this.props.text}</p>
                <input onChange={ (e) => this.props.changeText(e.target.value)
                }/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        text: state.welcomeReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeText: (value) =>
            dispatch({
                type: 'CHANGE_TEXT',
                value: value
            })
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Welcome)


