import React from 'react'
import FeedCard from './FeedCard'
// import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';



const Feed = props => {
  const { feed, handleDelete, handleUpdate } = props
  return (
    <div className='feed'>
      <div className="container" >
        {feed.map(feed_card => <div className="card">
          <FeedCard key={feed_card.id} feed_card={feed_card} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        </div>)
        }
      </div>
    </div>
  );
}



export default Feed;
