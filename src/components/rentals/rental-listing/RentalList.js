import React, {useEffect, useContext } from 'react'
import RentalCard from './RentalCard';
import Spinner from '../../../components/layouts/Spinner';
import RentalContext from '../../../context/rentalContext/rentalContext';

const RentalList = () => {
  const rentalContext = useContext(RentalContext);
  const {rentals, fetchRentals, loading } = rentalContext;
  useEffect(() => {
   fetchRentals();
  }, []);
  if (rentals !== null && rentals.length === 0 && !loading) return <h4> No rentals Found</h4>;

  return (
   <section id='rentalListing'>
    <h1 className='page-title'>Your Home All Around the World</h1>
      <div className='row'>


        {rentals !== null && !loading && rentals.map(rental => (
            <RentalCard key={rental._id} rental={rental}/>
         ))
        }
        {loading === true && <Spinner/>}

      </div>
  </section>
)
}
export default RentalList
