import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RentalCard = (props) => {
  const {id, title, city, street, category, image, bedrooms, description, dailyRate, shared } = props.rental;
  return (
    <div className='col-md-3 col-xs-6'>
      <Link to={`/rental/${id}`} className='rental-detail-link' >
        <div className='card bwm-card'>
          <img className='card-img-top' src={image} alt='rental hero image'></img>
          <div className='card-block'>
            <h6 className={`card-subtitle ${category}`}>{shared ? 'Shared' : 'Whole'} {category} - {city}</h6>
              <h4 className='card-title'>{title}</h4>
              <p className='card-text'>${dailyRate} per Night - Free Cancellation</p>
              <Link to={`/rental/${id}`} className='card-link' >More Info</Link>
          </div>
          </div>
      </Link>
    </div>
  )
}

RentalCard.propTypes = {
  rental: PropTypes.object.isRequired,
}
export default RentalCard
