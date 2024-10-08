import React from 'react'
import "./Card.css";

type Props = {}

const Card = (props: Props) => {
  return <div className='card'>
    <img 
    src='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
    alt='Image'
    />
    <div className='details'>
      <h2>APPLE</h2>
      <p>$110</p>
    </div>
    <p className='info'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni official
    </p>
  </div>;
};

export default Card