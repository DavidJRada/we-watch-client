import React, { Component } from 'react'
import FeedCard from './FeedCard'
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

    fetch('http://localhost:3001/api/feed_cards', {
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
          {this.state.feed.map(post => <div className="card">
            <FeedCard key={post.id} post={post}/>
          </div>)
          }
        </div>
      </div>
    );
  }
}

export default Feed;
