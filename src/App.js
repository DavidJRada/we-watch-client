import React, { Component } from 'react';
// import { Router, Link, Switch, Redirect } from 'react-router-dom'

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './components/Nav'
import Left from './components/Left'
import Feed from './components/Feed'
import Right from './components/Right'
import Footer from './components/Footer'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className='layout'>
        <Nav />
        <Left />
        <Feed />
        <Right />
        <Footer />
      </div>
    );
  }
}

export default App;
