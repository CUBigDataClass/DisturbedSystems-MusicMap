import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {name: 'Medium'};
    }

    handleChange(e) {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Welcome</h1>
                <p>Hello {this.state.name}</p>
                <input onChange={this.handleChange} defaultValue={this.state.name}/>
            </div>
        );
    }
}

ReactDOM.render(<Welcome/>, document.getElementById('app'));