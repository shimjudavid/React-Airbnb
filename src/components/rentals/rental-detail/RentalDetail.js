import React, {useEffect, useContext }  from 'react'
import { useParams } from "react-router-dom";
import RentalContext from '../../../context/rentalContext/rentalContext';

const RentalDetail = () => {
  const { id } = useParams();
  const rentalContext = useContext(RentalContext);
  const { fetchRentalByid, loading, rental } = rentalContext;

  useEffect(() => {
    fetchRentalByid(id);
  }, [])

  return (
    <div>
      {loading === true ? 'loading' :
        <div>
         <h1>{rental.title}</h1>
          <div>{rental.street}, {rental.city}</div>
          <div>{rental.category} {rental.shared ? 'Shared': 'Whole'}</div>
          <div><img src={rental.image}/> </div>



        </div>


      }

    </div>
  )
}

export default RentalDetail
