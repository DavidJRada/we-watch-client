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
      feed: [],
      formInputs: {
        img: "",
        title: "",
        content: "",
        subscribed: false,
        likes: 0,
        user_id: 0
      }
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.getFeed = this.getFeed.bind(this)
    // this.fetch = window.fetch.bind(window)
  }
  
  handleAdd(event, formInputs) {
    event.preventDefault()
    let token = "Bearer " + localStorage.getItem("jwt")
    console.log(token)
    console.log(formInputs)
    console.log(baseURL + "/api/feed_cards")
    console.log(JSON.stringify(formInputs))
    // fetch(baseURL + "/api/feed_cards", {
    //   body: JSON.stringify(formInputs),
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json',
    //     'Authorization:': token
    //   }
    // })


    fetch(baseURL + "/api/feed_cards", {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        "Authorization": token
      }
    })
      .then(createdFeed_card => {
        return createdFeed_card.json()
      })
      .then(jsonedFeed_card => {
        this.setState({
          feed: [jsonedFeed_card, ...this.state.feed]
        })
      }).catch(error => console.error(error))
  }

  componentDidMount() {
    this.getFeed()
  }

  getFeed() {
    let token = "Bearer " + localStorage.getItem("jwt")

    fetch(baseURL + '/api/feed_cards', {
      type: "GET",
      headers: {
        'Authorization': token
      }
    }).then(result => result.json()).then((result) => {
      return this.setState({
        feed: result
      })
    })
      .catch(err => console.error(err))
  }
  handleLogin(username) {
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
    console.log(this.state.currentUser)
    return (
      <>
        <Nav currentUser={this.state.currentUser} logout={this.logout} />
        <div className='layout'>
          {this.state.currentUser ?
            <>
              <Left />
              <Feed feed={this.state.feed}/>
              <Right handleSubmit={this.handleAdd} />
              <Footer />
            </>
            :
            <LoginPage login={this.login} logout={this.logout} />}
        </div>
      </>
    );
  }
}

export default App;
