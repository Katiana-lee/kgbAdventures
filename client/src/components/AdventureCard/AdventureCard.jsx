import React from 'react'
import './AdventureCard.css'
import { Link } from 'react-router-dom'

const AdventureCard = (props) => {
  const { title, location, category, price, description, details, imgURL, id, key } = props;

  return (
    <div className="adventure-card">
      <Link className="card" to={`/adventures/${id}`}>       
        <div className="card-title">{title}</div>
        <div className="card-categories">{category[0]}</div>
        <div className="card-location">{location}</div>
        <div className="card-price">${price}</div>
        <div className="card-description">{description}</div>
        <div className="card-details">{details[0]}</div>
        <img className="card-image" src={imgURL[0]} alt={title} />
      </Link>
    </div>
  )
  }
  export default AdventureCard;