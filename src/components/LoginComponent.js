import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../App.css';
import fire from '../config/firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            message: "",
        };
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                console.log(u)
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    message: "Check Email and Password"
                })
            })
    }
    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                console.log(u)
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    message: "Check Email and Password"
                })
            })
    }
    render() {
        return (
            <div className='login'>
                <div className='container'>
                    <div className='row row-content align-items-center justify-content-center'>
                        <div className='col-lg-7 col-12'>
                            <h2 className='text-center'>Welcome To E-Books</h2>
                        </div>
                        <div className='col-lg-5 col-12 form-box'>
                            <Form>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email"
                                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                                        placeholder="Enter Email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" id="password"
                                        onChange={(e) => { this.setState({ password: e.target.value }) }}
                                        placeholder="Enter Password" />
                                </FormGroup>
                                <br />
                                <p className='text-center' style={{ color: 'white' }}>{this.state.message}</p>
                                <Button color="success" size='md' block onClick={this.login}>Login</Button>
                                <Button color="info" size='md' block onClick={this.signup}>Sign Up</Button>
                            </Form>
                        </div>
                    </div>
                    <div className='row row-content'>
                        <div className='col-12 text-center'>
                            <small>Note: If you are a new user fill the details and click on signup</small>
                        </div>
                    </div>
                    <div className='row row-content'>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;