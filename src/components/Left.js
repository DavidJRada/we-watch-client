import React, { Component } from 'react'
// import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';


class Left extends Component {
    constructor(props) {
      super(props)
      this.state = {
  
      }
    }
    render() {
      return (
          <div className='left'>
            <div className='carousel'>
            <a href="/#"><img height='50%' src="https://cdn.vox-cdn.com/thumbor/T0YRuZUcXIzNYfl6O_89Rx7yQzo=/39x0:3111x2048/1220x813/filters:focal(39x0:3111x2048):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" alt='netflix'></img></a>

          </div>
          </div>
      );
    }
  }
  
  export default Left;
  