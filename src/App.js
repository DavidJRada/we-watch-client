import React, { Component } from 'react';
import { Router, Link, Switch, Redirect } from 'react-router-dom'

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './components/Nav'
import Left from './components/Left'
import Feed from './components/Feed'
import Right from './components/Right'
import Footer from './components/Footer'
import LoginPage from './components/LoginPage'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: ""
    }
  }
  render() {
    return (
      <div className='layout'>
      <Nav />
        {this.state.currentUser ?
          <Router>
            <Left />
            <Feed />
            <Right />
            <Footer />
            </Router> :
          <LoginPage />}

      </div>
    );
  }
}

export default App;
