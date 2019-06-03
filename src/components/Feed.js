import React, { Component } from 'react'
import FeedCard from './FeedCard'
// import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

let baseURL = ""

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3001'
} else {
  baseURL = 'https://we-watch-api.herokuapp.com'
}


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


  render() {
    console.log(this.state.feed)
    return (
      <div className='feed'>
        <div className="container" >
          {this.state.feed.map(feed_card => <div className="card">
            <FeedCard key={feed_card.id} feed_card={feed_card}/>
          </div>)
          }
        </div>
      </div>
    );
  }
}

export default Feed;
