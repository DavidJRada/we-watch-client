import React, { Component } from 'react'
import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: []

    }
    this.getFeed = this.getFeed.bind(this)
  }

  componentDidMount() {
    this.getFeed()
  }

  getFeed() {
    let token = "Bearer " + localStorage.getItem("jwt")

    fetch('http://localhost:3000/api/feed_cards', {
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
              </form>
              <button
                onClick={this.login}>Login</button>
            </div>}
        </div>
      </div>
    );
  }
}

export default Feed;
