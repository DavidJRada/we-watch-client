import React from 'react'
import Input from './Input.js'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieTitle: '',
            movieData: {},
        }
        this.handleChange = this.handleChange.bind(this)
        this.findMovie = this.findMovie.bind(this)
        this.tryAgain = this.tryAgain.bind(this)
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }
    findMovie(event) {
        event.preventDefault()
        fetch('https://www.omdbapi.com/?apikey=456caa89&t=' + this.state.movieTitle)
            .then(response => response.json())
            .then((response) => {
                this.setState({
                    movieData: response
                }, () => { this.props.handleMovieInfo(this.state.movieData) })
            })

            // console.log(this.state)

            .then()
            .catch(error => console.error(error))
    }
    tryAgain() {
        this.setState({
            movieData: ''
        })
    }

    render() {
        // console.log(this.state.movieData)
        return (
            <>
                {this.state.movieData.Title ?
                    <div className='container movie-search'>
                        <div className='center-align'>Congrats you found 
                        <br />
                        <br />
                         <span className='container found-movie-title'>{this.state.movieData.Title}</span> 
                         <br />
                         <br /> 
                         
                         Not what you were looking for?
                         
                         <br /> 
                         <br />
                         <button onClick={() => { this.tryAgain() }}>Try Again</button>
                         <br />
                         </div>
                    </div>
                    :
                    <>
                        <p className='center-align movie-search '>Search for your recommendation by title</p>
                        <form onSubmit={this.findMovie}>
                            <Input
                                handleChange={this.handleChange}
                                name={'movieTitle'}
                                placeholder={'Title'}
                                type={'text'}
                                value={this.state.movieTitle}
                                id={'movieTitle'}
                            />

                            <input type='submit' value={"Search"} />
                        </form>
                    </>}
            </>
        )

    }
}

export default Form
