import React from 'react'
// import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

function FeedCard(props) {
    const { feed_card } = props
    return (
        <div className='card'>
            <h1>{feed_card.img}</h1>
        </div>
    )
}
  

export default FeedCard
