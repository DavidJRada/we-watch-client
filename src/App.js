import React, { Component } from 'react';
// import { Router, Link, Switch, Redirect } from 'react-router-dom'
import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './components/Nav'
import Left from './components/Left'
import Feed from './components/Feed'
import Right from './components/Right'
import Footer from './components/Footer'
import LoginPage from './components/LoginPage'

let baseURL = ""

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3001'
} else {
  baseURL = 'https://we-watch-api.herokuapp.com'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: "",
      feed: []
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(event, formInputs) {
    event.preventDefault()
    fetch(baseURL + '/api/feed_cards', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdPost => {
        return createdPost.json()
      })
      .then(jsonedPost => {
        this.setState({
          feed: [jsonedPost, ...this.state.posts]
        })
      }).catch(error => console.error(error))
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
    // console.log(request)
    fetch(baseURL + "/api/user_token", {
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
        <Nav currentUser={this.state.currentUser} />
        <div className='layout'>
          {this.state.currentUser ?
          <>
            <Left />
            <Feed />
            <Right handleSubmit={this.handleAdd} />
            <Footer />
            </>
             :
            <LoginPage handleLogin={this.handleLogin} />}
        </div>
      </>
    );
  }
}

export default App;
