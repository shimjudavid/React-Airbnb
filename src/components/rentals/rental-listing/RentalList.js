import React, {useEffect, useContext } from 'react'
import RentalCard from './RentalCard';
import RentalContext from '../../../context/rentalContext/rentalContext';

const RentalList = () => {
  const rentalContext = useContext(RentalContext);
  const {rentals, fetchRentals, loading } = rentalContext;
  useEffect(() => {
   fetchRentals();
  }, []);

  return (
   <section id='rentalListing'>
    <h1 className='page-title'>Your Home All Around the World</h1>
      <div className='row'>
        {loading === false && rentals.map(rental => (
            <RentalCard key={rental.id} rental={rental}/>
         ))
        }
        {loading === true && '...loading'}
      </div>
  </section>
)
}
export default RentalList
