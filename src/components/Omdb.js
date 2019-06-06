import React from 'react'
import Input from './Input.js'
import Omdb from './Omdb'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {



        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {
        // console.log(this.props.currentUser)
        return (
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
                <input type='submit' value={"Recommend this Movie!"} />
                </form>
        )

    }
}

export default Form
