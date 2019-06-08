import React, { Component } from 'react'
import { Carousel } from 'react-materialize'
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

        <Carousel images={[
          'https://picsum.photos/200/300?image=0',
          'https://picsum.photos/200/300?image=1',
          'https://picsum.photos/200/300?image=2',
        ]} />
      </div>
    );
  }
}

export default Left;
