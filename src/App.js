import React, { Component } from 'react';
import { Router, Link, Switch, Redirect } from 'react-router-dom'
import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './components/Nav'
import Left from './components/Left'
import Feed from './components/Feed'
import Right from './components/Right'
import Footer from './components/Footer'
import LoginPage from './components/LoginPage'


if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://gitpub-backend.herokuapp.com'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: ""
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleLogin(username) {
    console.log(username)
    this.setState({
      currentUser: username
    })
  }
  login() {
    const email = $("#email").val()
    const password = $("#password").val()
    const username = $("#username").val()
    const request = { "auth": { "email": email, "password": password, "username": username } }
    console.log(request)
    fetch("http://localhost:3001/api/user_token", {
      body: JSON.stringify(request),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(result => result.json())
      .then(function (result) {
        localStorage.setItem("jwt", result.jwt)
      }).then(() => {
        return this.setState({
          currentUser: username
        })
      })
      .catch(err => console.error(err))
  }
  logout() {
    localStorage.setItem("jwt", "")
    this.setState({
      currentUser: "",
    })
  }
  render() {
    return (
      <>
        <Nav />
        {/* <div className='layout'> */}
          {this.state.currentUser ?
            <div className='layout'>
              <Left />
              <Feed />
              <Right />
              <Footer />
            </div> :
            <LoginPage handleLogin={this.handleLogin} />}
        {/* </div> */}
      </>
    );
  }
}

export default App;
