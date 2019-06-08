import React, { Component } from 'react'
import Form from './Form'
// import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';



class FeedCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formVisible: false,
            likes: this.props.feed_card.likes
        }
        this.toggleForm = this.toggleForm.bind(this)
        this.toggleSubscribe = this.toggleSubscribe.bind(this)
        this.addLike = this.addLike.bind(this)
    }
    toggleForm() {
        if (this.props.feed_card) {
            this.setState({
                formVisible: !this.state.formVisible
            })
        }

    }

    toggleSubscribe() {
        this.setState({
            subscribed: !this.state.subscribed
        })
    }
    addLike = () => {
        console.log(this.state.likes)
        this.setState({
                likes: this.state.likes + 1
        })
    }

    render() {
        // console.log(this.props.feed_card)
        return (
            <div className='card'>

                {this.state.formVisible ?
                    <Form currentUser={this.props.currentUser} feed_card={this.props.feed_card} handleSubmit={this.props.handleSubmit} /> :
                    <>
                        <div className='card-content'>
                            <div className='topOfCard'>
                                <img src={this.props.feed_card.img} alt="profile"></img>
                                <h4>{this.props.feed_card.user}</h4>                            {this.state.subscribed ?
                                    <button onClick={() => { this.toggleSubscribe() }}>Follow</button> : <button onClick={() => { this.toggleSubscribe() }}>Unfollow</button>}
                            </div>
                            <span className='card-title'>{this.props.feed_card.title}</span>
                            <p>{this.props.feed_card.content}</p>
                            <br></br>



                            <br></br>
                            <div className='movie-info'>
                                <div className='movie-text'>
                                    <p><span className='movie-keys'>Title:</span> {this.props.feed_card.movieTitle}</p>
                                    <p><span className='movie-keys'>Director:</span>  {this.props.feed_card.movieDirector}</p>
                                    <p><span className='movie-keys'>Year: </span> {this.props.feed_card.movieYear}</p>
                                    <br />
                                    <p><span className='movie-keys'>Plot: </span> {this.props.feed_card.moviePlot}</p>
                                </div>
                                <div className='movie-picture'>
                                    <p><span className='movie-keys'>Poster (click for more): </span> </p><a href={`https://en.wikipedia.org/wiki/${this.props.feed_card.movieTitle}`} target='_blank'><img className='poster' src={this.props.feed_card.moviePoster} alt={`No Poster Available for ${this.props.feed_card.movieTitle}`}></img></a>
                                </div>
                            </div>

                        </div>
                        <div className="card-action">
                            <button onClick={this.addLike}>Like</button> {this.state.likes}
                            <br></br>
                            <button onClick={() => { this.toggleForm() }}>Edit</button>

                            <button onClick={() => { this.props.handleDelete(this.props.feed_card) }}>Delete</button>
                        </div>
                    </>}
            </div>
        )
    }
}


export default FeedCard
