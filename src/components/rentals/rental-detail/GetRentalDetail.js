import React, {useEffect, useContext }  from 'react'
import { useParams } from "react-router-dom";
import Spinner from '../../../components/layouts/Spinner';
import RentalContext from '../../../context/rentalContext/rentalContext';
import RentalDetail from './RentalDetail';

const GetRentalDetail = () => {
  const { id } = useParams();
  const rentalContext = useContext(RentalContext);
  const { fetchRentalByid, loading, rental, error } = rentalContext;

  useEffect(() => {
    fetchRentalByid(id);

  }, [id]);

  if (error !== null) return <h4>{error} -  No rental Found. </h4>;

  return (
    <div>

      {rental !== null && !loading ? <RentalDetail rental={rental}/>  : <Spinner/>  }

    </div>
  )
}

export default GetRentalDetail
