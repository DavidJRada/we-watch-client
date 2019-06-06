import React from 'react'
import Input from './Input.js'
import Omdb from './Omdb'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: {
                email: '',
                password: '',
                username: ''
            },
            img: '',
            title: '',
            content: '',
            subscribed: false,
            likes: 0,
            user_id: 1,


        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentWillMount() {
        if (this.props.feed_card) {
            this.setState({
                img: this.props.feed_card.img,
                title: this.props.feed_card.title,
                content: this.props.feed_card.content,
                subscribed: this.props.feed_card.subscribed,
                likes: this.props.feed_card.likes,
                username: this.state.currentUser.username,
                id: this.props.feed_card.id
            })
        }

        this.setState({

            currentUser: {
                email: this.props.currentUser.email,
                password: this.props.currentUser.password,
                username: this.props.currentUser.username
            }
        })



    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.currentUser)
        this.props.handleSubmit(
            event,
            {
                img: this.state.img,
                title: this.state.title,
                content: this.state.content,
                subscribed: this.state.subscribed,
                likes: this.state.likes,
                user: this.state.currentUser.username,
                user_id: this.state.user_id,
                id: this.state.id
            }
        )
        this.setState({
            img: '',
            title: '',
            content: '',
            subscribed: false,
            likes: 0,
            user_id: 0
        })
        // console.log(this.state.currentUser.username)

    }
    render() {
        // console.log(this.props.currentUser)
        return (
            <div className='container'>
                <Omdb />
                <form onSubmit={this.handleSubmit}>
                    {/* <Input
                        handleChange={this.handleChange}
                        name={'img'}
                        placeholder={'img'}
                        type={'text'}
                        value={this.state.img}
                        id={'img'}
                    /> */}
                    <Input
                        handleChange={this.handleChange}
                        name={'title'}
                        placeholder={'title'}
                        type={'text'}
                        value={this.state.title}
                        id={'title'}
                    />
                    <Input
                        handleChange={this.handleChange}
                        name={'content'}
                        placeholder={'content'}
                        type={'text'}
                        value={this.state.content}
                        id={'content'}
                    />

                    <input type='submit' value={this.props.feed_card ? "update this Post" : "add this Post"} />
                </form>
                
            </div>

        )

    }
}

export default Form
