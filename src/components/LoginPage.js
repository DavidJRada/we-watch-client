import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './Nav'
import Left from './Left'
import Right from './Right'
import Footer from './Footer'

const LoginPage = props => {
    const { login, logout } = props

    return ( <>
        <Left />
        <div className='feed'>
            <div className="container" >

                    <div className='login'>
                        <form>
                            <label htmlFor="email">Email: </label>
                            <br />
                            <input
                                name="email"
                                id="email"
                                type="email"
                            />
                            <br />
                            <label htmlFor="password">Password: </label>
                            <br />
                            <input
                                name="password"
                                id="password"
                                type="password"
                            />
                            <br />
                            <label htmlFor="username">username: </label>
                            <br />
                            <input
                                name="username"
                                id="username"
                                type="text"
                            />
                        </form>
                        <div className='card-action'>
                        <button
                            onClick={() => { login() }}>Login</button>
                             <button
                            onClick={() => { login() }}>Sign Up</button>
                            </div>
                    </div>
            </div>
        </div>
        <div className='right'></div>
        <footer></footer>
    </>)
}

export default LoginPage