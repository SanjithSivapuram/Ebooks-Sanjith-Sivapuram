import React, { Component } from 'react';
import './App.css';
import Login from './components/LoginComponent';
import Route from './components/RouteComponent';
import fire from './config/firebase';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  render() {
    return (
      <div className='App'>
        {this.state.user ? (<Route user={this.state.user.email} />) : (<Login />)}
      </div>
    )
  }
}

export default App;
