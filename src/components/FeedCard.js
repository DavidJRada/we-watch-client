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
            subscribed: this.props.feed_card.subscribed
        }
        this.toggleForm = this.toggleForm.bind(this)
        this.toggleSubscribe = this.toggleSubscribe.bind(this)
    }
    toggleForm() {
        if (this.props.feed_card) {
            this.setState({
                formVisible: !this.state.formVisible
            })
        }

    }
    updateCard(key) {

    }
    toggleSubscribe() {
        this.setState({
            subscribed: !this.state.subscribed
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
                            <p><button>Like</button> {this.props.feed_card.likes}
                                <br></br>
    
                            </p>


                        </div>
                        <div className="card-action">
                            
                            <button onClick={() => { this.toggleForm() }}>Edit</button>

                            <button onClick={() => { this.props.handleDelete(this.props.feed_card) }}>Delete</button>
                        </div>
                    </>}
            </div>
        )
    }
}


export default FeedCard
