import React from 'react';
import './Adventure.css';
import { Link } from 'react-router-dom'

const Adventure = (props) => {
  const { _id, title, location, category, price, description, details, imgURL } = props;

return (
  <>
  <Link className="adventure" style={{ backgroundImage: `url(${imgURL[0]})`, objectFit: "cover", backgroundSize: '400px 400px', backgroundRepeat: 'no-repeat'}} to={`/adventures/${_id}`}>
    <div className="adventure-image"></div>
    <div className="adventure-title">{title}</div>
      <div className="adventure-location">{location}</div>
      <div className="adventure-price">
        <i class="fa fa-rub" aria-hidden="true"></i> {price}
      </div>
  </Link>
</>
  )
}
export default Adventure;


{/* <>
  <Link className="adventure" style={{ backgroundImage: `url(${imgURL[0]})`, backgroundSize: '400px 400px', backgroundRepeat: 'no-repeat'}} to={`/adventures/${_id}`}>
    <div className="adventure-image"></div>
    <div className="adventure-title">{title}</div>
    <div className="adventure-location">{location}</div>
  </Link>
</> */}

{/* <>
  <Link className="adventure" to={`/adventures/${_id}`}>
    <img className="adventure-image" src={imgURL[0]} alt={title} />  
    <div className="adventure-title">{title}</div>
    <div className="adventure-location">{location}</div>
  </Link>
</> */}