import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import $ from 'jquery'
import { runInThisContext } from 'vm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bananasReceived: [],
      currentUser: ""
    }
    this.getBananas = this.getBananas.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.forceUpdate = this.forceUpdate.bind(this)
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
  logout() {
    localStorage.setItem("jwt", "")
    this.setState({
      currentUser: "",
      bananasReceived: []
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="container" >
        {this.state.currentUser ? <button
          onClick={this.logout}>Logout</button> :

          <div className='login'>
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
            </div> }
          
          
          
          
          <button onClick={() => { this.getBananas(true) }} style={{ marginTop: "10vh" }}>Get Bananas </button> 
       
        

        





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
