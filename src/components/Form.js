import React from 'react'
import Input from './Input.js'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            feed_card: {},
            img: '',
            title: '',
            content: '',
            subscribed: false,
            likes: 0,
            user_id: 0

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
                user_id: this.props.feed_card.user_id,
                id: this.props.feed_card.id
            })
        }
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.handleSubmit(
            event,
            {
                img: this.state.img,
                title: this.state.title,
                content: this.state.content,
                subscribed: this.state.subscribed,
                likes: Number(this.state.likes),
                user_id: Number(this.state.user_id),
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
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    handleChange={this.handleChange}
                    name={'img'}
                    placeholder={'img'}
                    type={'text'}
                    value={this.state.img}
                    id={'img'}
                />
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
                <Input
                    handleChange={this.handleChange}
                    name={'subscribed'}
                    placeholder={'subscribed'}
                    type={'boolean'}
                    value={this.state.subscribed}
                    id={'subscribed'}
                />
                <Input
                    handleChange={this.handleChange}
                    name={'likes'}
                    placeholder={'likes'}
                    type={'number'}
                    value={this.state.likes}
                    id={'likes'}
                />
                <input type='submit' value={this.props.feed_card ? "update this feed_card" : "add this feed_card"} />
            </form>
        )
    }
}

export default Form
