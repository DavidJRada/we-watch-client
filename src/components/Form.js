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
            movieData: {}


        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleMovieInfo = this.handleMovieInfo.bind(this)
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
                id: this.props.feed_card.id,
                movieTitle: this.props.feed_card.movieTitle,
                movieDirector: this.props.feed_card.movieDirector,
                movieYear: this.props.feed_card.movieYear,
                moviePlot: this.props.feed_card.moviePlot,
                moviePoster: this.props.feed_card.moviePOster
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
        console.log(this.state.movieData)
        this.props.handleSubmit(
            event,
            {
                img: 'https://media.licdn.com/dms/image/C4D03AQFGjp4GyglG2w/profile-displayphoto-shrink_200_200/0?e=1565827200&v=beta&t=O9kTtfsUJmbeNAdUoOeJ-NDwhHBjVd4xdMtmE5awlzg',
                title: this.state.title,
                content: this.state.content,
                subscribed: this.state.subscribed,
                likes: this.state.likes,
                user: this.state.currentUser.username,
                user_id: this.state.user_id,
                movieTitle: this.state.movieData.Title,
                movieDirector: this.state.movieData.Director,
                movieYear: this.state.movieData.Year,
                moviePlot: this.state.movieData.Plot,
                moviePoster: this.state.movieData.Poster

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

    handleMovieInfo(movieData) {
        this.setState({
            movieData: movieData
        })
    }
    render() {
        // console.log(this.state.movieData)
        return (
            <div >
                <Omdb handleMovieInfo={this.handleMovieInfo} />
                <br />
                <form onSubmit={this.handleSubmit} >
                    <Input
                        handleChange={this.handleChange}
                        name={'title'}
                        placeholder={'Title'}
                        type={'text'}
                        value={this.state.title}
                        id={'title'}
                    />
                    <Input
                        handleChange={this.handleChange}
                        name={'content'}
                        placeholder={'Why?'}
                        type={'textarea'}
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
