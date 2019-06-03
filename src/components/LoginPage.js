import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import $ from 'jquery'

let baseURL = ""

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3001'
} else {
  baseURL = 'https://we-watch-api.herokuapp.com'
}

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: ""
        }
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }
    login() {
        const email = $("#email").val()
        const password = $("#password").val()
        const username = $("#username").val()
        const request = { "auth": { "email": email, "password": password, "username": username } }
        console.log(request)
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
            }).then(this.props.handleLogin(username))
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
            <div className='feed'>
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
                                <br />
                                <label htmlFor="username">username: </label>
                                <br />
                                <input
                                    name="username"
                                    id="username"
                                    type="text"
                                />
                            </form>
                            <button
                                onClick={this.login}>Login</button>
                        </div>}
                </div>
            </div>
        )
    }
}

export default LoginPage