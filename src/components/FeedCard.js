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
        }
        this.toggleForm = this.toggleForm.bind(this)
    }
    toggleForm() {
        this.setState({
            formVisible: !this.state.formVisible
        })
    }

    render() {
        // const { feed_card, handleDelete, handleUpdate } = props
        return (
            <div className='card'>

                {this.state.formVisible ?
                    <Form feed_card={this.props.feed_card} handleUpdate={this.props.handleUpdate} /> :
                    <>
                        <div className='card-content'>

                            <img src={this.props.feed_card.img} alt="profile"></img>
                            {/* <h3>{this.props.feed_card.user}</h3> */}
                            <span className='card-title'>{this.props.feed_card.title}</span>
                            <p>{this.props.feed_card.content}</p>
                            <p>{this.props.feed_card.subscribed}</p>
                            <p>{this.props.feed_card.likes}</p>

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
