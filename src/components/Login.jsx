import React, { Component } from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import './Login.css';


export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
      }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { username, password } = this.state;
        
        if(username === 'admin' && password === 'admin'){
            //console.log(username+': '+password);
            this.setState({authenticated:true});
        }
    }

    render(){
        return(
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl 
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button
                        block
                        disabled={!this.validateForm()}
                        bsSize="large"
                        bsStyle="primary"
                        type="submit"
                        //className="submit-btn"
                    >Login</Button>
                </form>
            </div>
        );
    }
}