import React, { Component } from 'react'
import { Carousel } from 'react-materialize'
import $ from 'jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';




class Left extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
    }
  }
  render() {
    return (
      <div className='left'>

        <div className='carousel'>
          <Carousel images={[
            'https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/50742009_10156106568203870_934243983465381888_n.png?_nc_cat=1&_nc_oc=AQm3bEXF2kkmsy16uGpc8L0G-KSzzc2PqguYrrWs5oWWLP5ZVCefqSrRJbznMVnqFiU&_nc_ht=scontent.fijd1-1.fna&oh=11a69884af5cc167dc8f843c00ca137c&oe=5D86901C',
            'https://images-na.ssl-images-amazon.com/images/I/411j1k1u9yL.png',
            'https://images-na.ssl-images-amazon.com/images/I/51a4BVcGL2L.png',
          ]} />
        </div>
      </div>
    );
  }
}

export default Left;
