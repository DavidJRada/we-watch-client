import React from 'react'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

function Nav(props) {
  const { currentUser, logout } = props
  return (
    <nav>
      <div className='nav-wrapper red text-darken-4'>
        <a href='/' className='brand-logo left red'>Lets Flix</a>
        <ul id='nav-mobile' className='right red'>
          {currentUser.username ? <>
            <li  onClick={() => {logout()}}><a className='nav-links' href='/'>Logout</a></li> </>
            : <> <li><a href='/'>Login</a></li>
            <li><a href='/'>Sign Up</a></li> </>
        }
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
