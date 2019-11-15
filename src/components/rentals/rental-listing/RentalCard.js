import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { rentalType } from '../../../helpers';

const RentalCard = (props) => {
  const {_id, title, city, category, image,dailyRate, shared } = props.rental;
  return (
    <div className='col-md-3 col-xs-6'>
      <Link to={`/rental/${_id}`} className='rental-detail-link' >
        <div className='card bwm-card'>
          <img className='card-img-top' src={image} alt={title}></img>
          <div className='card-block'>
            <h6 className={`card-subtitle ${category}`}>{rentalType(shared)} {category} - {city}</h6>
              <h4 className='card-title'>{title}</h4>
              <p className='card-text'>${dailyRate} per Night - Free Cancellation</p>

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
