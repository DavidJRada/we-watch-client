import React, { Component } from 'react'
import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

function FeedCard(props) {
    const { post } = props
    return (
        <div className='feedCard'>
            <h1>{post.img}</h1>
        </div>
    )
}
  

export default FeedCard
