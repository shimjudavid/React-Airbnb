import React  from 'react'
import { rentalType, makeTitle } from '../../../helpers';
import RentalMap from './RentalMap';
import useGeoPosition from '../../../customhooks/useGeoPosition';
import MapPreloader from '../../layouts/MapPreloader';

const RentalDetail = (props) => {
  const { title, city, street, category, image, bedrooms, shared, description } = props.rental;
  const address = `${street}, ${city}`;
  const [position, geoloading, geoerror] = useGeoPosition(process.env.REACT_APP_GOOGLEKEY, address);

  return (
    <div>

<section id='rentalDetails'>
  <div className='upper-section'>
    <div className='row'>
      <div className='col-md-6'>
                  <img src={ image} alt=''></img>
      </div>
            <div className='col-md-6'>

              {!geoloading ? (

                !geoerror ? (
                <RentalMap
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLEKEY}&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `360px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    position={position}
                    error = 'false'
    />
              ) :
                (
                  <RentalMap
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLEKEY}&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `360px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    position={{lat:0, lng:0}}
                    error = 'true'
    />
                )

              ) : <MapPreloader/>  }



      </div>
    </div>
  </div>

  <div className='details-section'>
    <div className='row'>
      <div className='col-md-8'>
        <div className='rental'>
          <h2 className={`rental-type ${category}`}>{rentalType(shared)} {category}</h2>
          <h1 className='rental-title'>{title}</h1>
          <h2 className='rental-city'>{makeTitle(city)}</h2>
          <div className='rental-room-info'>
            <span><i className='fa fa-building'></i>{bedrooms} bedrooms</span>
            <span><i className='fa fa-user'></i> {bedrooms + 4} guests</span>
            <span><i className='fa fa-bed'></i> {bedrooms + 2} beds</span>
          </div>
          <p className='rental-description'>
            {description}
          </p>
          <hr></hr>
          <div className='rental-assets'>
            <h3 className='title'>Assets</h3>
            <div className='row'>
              <div className='col-md-6'>
                <span><i className='fa fa-asterisk'></i> Cooling</span>
                <span><i className='fa fa-thermometer'></i> Heating</span>
                <span><i className='fa fa-location-arrow'></i> Iron</span>
              </div>
              <div className='col-md-6'>
                <span><i className='fa fa-desktop'></i> Working area</span>
                <span><i className='fa fa-cube'></i> Washing machine</span>
                <span><i className='fa fa-cube'></i> Dishwasher</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-4'> BOOKING</div>
    </div>
  </div>
</section>


    </div>
  )
}

export default RentalDetail
