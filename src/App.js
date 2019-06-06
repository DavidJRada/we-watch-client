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
      },
      updatedFeed_card: {}
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)

    this.handleAdd = this.handleAdd.bind(this)
    this.getFeed = this.getFeed.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleAdd(event, formInputs) {
    event.preventDefault()
    console.log(formInputs)
    // let token = "Bearer " + localStorage.getItem("jwt")
    fetch(baseURL + "/feed_cards", {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
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
  // componentDidMount() {
  //   this.getFeed()
  // }


  componentDidMount() {
    this.getFeed()
    if (this.state.currentUser) {
      this.setState({
        currentUser: {
          username: localStorage.getItem("username")
        }
      })
    }
  }
  
  getFeed() {
    console.log('hi')
    fetch(baseURL + '/feed_cards', {

      type: "GET",
    }).then(result => result.json()).then((result) => {
      this.setState({
        feed: result
      })
    })
      .catch(err => console.error(err))

  }
  handleDelete(deletedFeed_card) {
    // let token = "Bearer " + localStorage.getItem("jwt")

    fetch(baseURL + `/feed_cards/${deletedFeed_card.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
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
  handleUpdate(event, formInputs) {
    event.preventDefault()
    // console.log(this)
    fetch(baseURL + `/feed_cards/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
      }
    })
      .then((updatedFeed_card) => {
        updatedFeed_card.json()
        let id = updatedFeed_card.id
        console.log(updatedFeed_card)})
        // this.state.feed.splice())
      
      // .then(updatedFeed_card => this.setState({
      //   updatedFeed_card: updatedFeed_card
      // }))
      .catch(error => console.error(error))
  }

  login() {
    const email = $("#email").val()
    const password = $("#password").val()
    const username = $("#username").val()

    // const request = { "auth": { "email": email, "password": password, "username": username } }
    this.setState({
      currentUser: {
        email: email,
        password: password,
        username: username,
      }
    })

    localStorage.setItem("username", username)

  }

  logout() {

    localStorage.setItem("username", "")

    this.setState({
      user: {},
    })
  }
  render() {
    // console.log(this.state.feed)
    return (
      <>
        <Nav currentUser={this.state.currentUser} logout={this.logout} />
        <div className='layout'>
          {this.state.currentUser.username ?
            <>
              <Left />
              <Feed feed={this.state.feed} handleDelete={this.handleDelete} currentUser={this.state.currentUser} handleUpdate={this.handleUpdate} />

              <Right handleSubmit={this.handleAdd} currentUser={this.state.currentUser} />
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
