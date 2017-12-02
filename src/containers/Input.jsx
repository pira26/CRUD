import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            mail: '',
            username: ''
        }
    }

    handle(e) {
        return this.setState({
            mail: e.target.value,
            username: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="Mail">Mail</label>
                    <input type="text" onChange={(e) => this.handle(e)}/>
                    <label htmlFor="Username">Username</label>
                    <input type="text" onChange={(e) => this.handle(e)}/>
                </div>
                <div>
                    <p>{this.state.mail}</p>
                    <p>{this.state.username}</p>
                </div>
            </div>
        )
    }
}

export default Input;