import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bananasReceived: [],
      currentUser: ""
    }
    this.getBananas = this.getBananas.bind(this)
    this.login = this.login.bind(this)
  }
  getBananas() {
    let token = "Bearer " + localStorage.getItem("jwt")

    fetch('http://localhost:3000/api/bananas', {
      type: "GET",
      headers: {
        'Authorization': token
      }
    }).then(result => result.json()).then((result) => {
        return this.setState({
            bananasReceived: result
          })
        })
      .catch(err => console.error(err))
  }

  login() {
    const email = $("#email").val()
    const password = $("#password").val()
    const request = { "auth": { "email": email, "password": password } }
    console.log(request)
    fetch("http://localhost:3000/api/user_token", {
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
          currentUser: email
        })
      })
      .catch(err => console.error(err))
  }
  render() {
    console.log(this.state)
    return (
      <div className="container" >
        <button onClick={this.getBananas} style={{ marginTop: '25vh' }} >Get Bananas</button>
        <br />
        <form>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            name="email"
            id="email"
            type="email"
          />
          <br />
          <label htmlFor="password">Password: </label>
          <br />
          <input
            name="password"
            id="password"
            type="password"
          />
        </form>
        <button
          onClick={this.login}>Login</button>
        <br />
        <button onClick={() => { this.getBananas(false) }} style={{ marginTop: "10v" }}>gGet One Banana</button>

        <br />
        <button onClick={() => { this.getBananas(true) }} style={{ marginTop: "10vg" }}>Get Bananas</button>





        {this.state.bananasReceived.map(banana => <div className="card">
          <p>{banana.name}</p>
          <p>{banana.location}</p>
          <p>{this.state.currentUser}</p>
        </div>)
        }
      </div >
    );
  }
}

export default App;
