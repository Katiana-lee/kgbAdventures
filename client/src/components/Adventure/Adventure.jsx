import React from 'react';
import './Adventure.css';
import { Link } from 'react-router-dom'

const Adventure = (props) => {
  const { _id, title, location, category, price, description, details, imgURL } = props;

return (
    <>
      <Link className="adventure" to={`/adventures/${_id}`}>
        <div className="adventure-title">{title}</div>
        <div className="adventure-categories">{category[0]}</div>
        <div className="adventure-location">{location}</div>
        <div className="adventure-price">${price}</div>
        <div className="adventure-description">{description}</div>
        <div className="adventure-details">{details[0]}</div>
        <img className="adventure-image" src={imgURL[0]} alt={title} />
      </Link>
    </>
  )
}
export default Adventure;