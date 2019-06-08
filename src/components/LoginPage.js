import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Left from './Left'
import Footer from './Footer'


const LoginPage = props => {
    const { login } = props

    return (<>
        <Left />
        <div className='feed'>
            <div className="container" >
                <div className='login'>
                    <form>
                        <div className='row'>
                            <div className='input-field col 10'>
                                <label htmlFor="email">Email: </label>
                                <br />
                                <input
                                    name="email"
                                    id="email"
                                    type="email"
                                />
                            </div>
                            <br />
                            <div className='input-field col 6'>
                                <label htmlFor="password">Password: </label>
                                <br />
                                <input
                                    className='input-field'
                                    name="password"
                                    id="password"
                                    type="password"
                                />
                            </div>
                            <br />
                            <div className='input-field col'>
                                <label htmlFor="username">Username: </label>
                                <br />
                                <input
                                    name="username"
                                    id="username"
                                    type="text"
                                />
                            </div>
                        </div>
                    </form>
                    <div className='login-buttons'>
                        <br />
                        <br />
                        <button className='button'
                            onClick={() => { login() }}>Login</button>
                        <button
                            onClick={() => { login() }}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='right'>
            <div className='center-align container intro'>
                <div></div>
                <div className='explanation'>
                    <p>Login to follow your favorite actors and friends. See what they are watching and recommend your favorites to them</p>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}

export default LoginPage