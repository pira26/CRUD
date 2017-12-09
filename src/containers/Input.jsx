import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            mail: '',
            username: '',
            password: '',
        };

        this.handleMail = this.handleMail.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    componentDidMount() {
        axios.post('https://frozen-ocean-48447.herokuapp.com/users', {
            mail: this.state.mail,
            username: this.state.username,
            password: this.state.password,
        })
        .then((resp) => {
            console.log('resp', resp);
        })
        .catch((err) => {
            console.error('err', err);
        });
    }

    handleMail(e) {
        this.setState({
            mail: e.target.value,
        });
    }

    handleUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    submitUserForm(e) {
        e.preventDefault();
        this.setState({
            mail: e.target.value,
            username: e.target.value,
            password: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="Username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleUsername} />
                    <label htmlFor="Mail">Mail</label>
                    <input 
                        type="text" 
                        name="mail" 
                        value={this.state.mail} 
                        onChange={this.handleMail} />
                    <label htmlFor="Password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handlePassword} />
                    <button type="submit" onClick={this.submitUserForm}>Submit</button>
                </form>
                <div>
                    <p>Hi I'm {this.state.username} and subscribe for more newsletters at {this.state.mail}</p>
                </div>
            </div>
        )
    }
}

export default Input;