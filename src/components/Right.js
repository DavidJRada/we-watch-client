import React from 'react'
import Form from './Form'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

const Right = props => {
  const { handleSubmit, currentUser } = props
  return (
    <div className='right'>
      <div className='container'>
      <Form handleSubmit={handleSubmit} currentUser={currentUser} />
    </div>
    </div>
  );
}
  

export default Right;
