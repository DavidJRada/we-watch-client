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
      currentUser: {
        username: '',
        password: '',
        email: '',
        id: 0
      },
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
    this.getUser = this.getUser.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleAdd(event, formInputs) {
    event.preventDefault()
    console.log(formInputs)
    let token = "Bearer " + localStorage.getItem("jwt")
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
        return createdFeed_card.json().then(console.log(createdFeed_card))

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
  handleDelete(deletedFeed_card) {
    let token = "Bearer " + localStorage.getItem("jwt")

    fetch(baseURL + `/api/feed_cards/${deletedFeed_card.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        "Authorization": token
      }
    })
      .then(json => {
        this.setState(state => {
          const feed = state.feed.filter(feed_card => {
            return feed_card.id !== deletedFeed_card.id
          })
          return { feed }
        })
      }).catch(error => console.log(error))
  }

  handleLogin(user) {
    this.setState({
      currentUser: user
    })
  }
  handleUpdate(event, formInputs) {
    event.preventDefault()

    let token = "Bearer " + localStorage.getItem("jwt")

    fetch(baseURL + `/api/feed_cards/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        "Authorization": token
      }
    }).then(updatedFeed_card => {
      this.getFeed()
    }).catch(error => console.error(error))
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
    })
      .then(result => result.json())
      .then(function (result) {
        localStorage.setItem("jwt", result.jwt)
      })
      .then(() => {
        this.setState({
          currentUser: {
            email: email,
            password: password,
            username: username,
          }
        })
      })
      .then(
        this.getUser(username)
      )
      .catch(err => console.error(err))
  }
  getUser(username) {
    // let username = this.state.currentUser.username
    console.log(username)
    fetch(baseURL + `/users/${username}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
  
  .then(result => result.json())
      .then(jsonedUser => {
        return this.setState({
          currentUser : {
            email: jsonedUser.email,
            password: jsonedUser.password,
            username: jsonedUser.username,
            id : jsonedUser.id
          } 
        })
      })
      .catch(err => console.error(err))
  }
  logout() {
    localStorage.setItem("jwt", "")
    this.setState({
      user: {},
    })
  }
  render() {
    console.log(this.state.currentUser)
    return (
      <>
        <Nav currentUser={this.state.currentUser} logout={this.logout} />
        <div className='layout'>
          {this.state.currentUser.username ?
            <>
              <Left />
              <Feed feed={this.state.feed} handleDelete={this.handleDelete} currentUser={this.state.currentUser} handleUpdate={this.handleUpdate} />
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
