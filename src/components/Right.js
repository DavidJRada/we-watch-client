import React from 'react'
import Form from './Form'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

function Right(props) {
  return (
    <div className='right'>
      <Form handleSubmit={props.handleSubmit} />
    </div>
  );
}
  

export default Right;
