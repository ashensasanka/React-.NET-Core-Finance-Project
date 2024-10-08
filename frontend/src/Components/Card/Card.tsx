import React from 'react'
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props) :JSX.Element => {
  return <div className='card'>
    <img 
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjqnVZUxDeyoX8-PszAwdsTGoif5ax_wgjA&s'
    alt='Image'
    />
    <div className='details'>
      <h2>{companyName} ({ticker})</h2>
      <p>$ {price}</p>
    </div>
    <p className='info'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni official
    </p>
  </div>;
};

export default Card