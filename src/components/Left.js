import React, { Component } from 'react'
import $ from 'jquery'
import { Carousel } from 'react-materialize'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.carousel');
//   // var instances = M.Carousel.init(elems, options);
// });

// // Or with jQuery

// $(document).ready(function () {
//   $('.carousel').carousel();
// });

class Left extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    var elems = document.querySelectorAll('.carousel');
    // var instances = M.Carousel.init(elems, options);
  }


  render() {
    return (
      <div className='left'>

        <Carousel images={[
          'https://picsum.photos/200/300?image=0',
          'https://picsum.photos/200/300?image=1',
          'https://picsum.photos/200/300?image=2',
        ]} />
        {/* <div className='carousel'>
          <a className='carousel-item' href="/#"><img height='50%' src="https://cdn.vox-cdn.com/thumbor/T0YRuZUcXIzNYfl6O_89Rx7yQzo=/39x0:3111x2048/1220x813/filters:focal(39x0:3111x2048):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" alt='netflix'></img></a>
          <a className='carousel-item' href="/#"><img height='50%' src="https://www.advertgallery.com/wp-content/uploads/2018/11/amazon-prime-video-start-your-30-day-free-trail-ad-times-of-india-delhi-16-11-2018.png" alt='amazon prime'></img></a>

        </div> */}
      </div>
    );
  }
}

export default Left;
