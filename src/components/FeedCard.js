import React from 'react'
// import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

function FeedCard(props) {
    const { feed_card, handleDelete } = props
    console.log(feed_card)
    return (
        <div className='card'>
            <div className='card-content'>
                <img src={feed_card.img} alt="profile picture"></img>
                <span className='card-title'>{feed_card.title}</span>
                <p>{feed_card.content}</p>
                <p>{feed_card.subscribed}</p>
                <p>{feed_card.likes}</p>
            </div>
            <div className="card-action">
                <a href="#">Edit</a>
                <button onClick={() => handleDelete(feed_card)}>Delete</button>
            </div>

        </div>
    )
}


export default FeedCard
