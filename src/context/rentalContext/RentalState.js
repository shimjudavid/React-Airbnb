import React, { useReducer } from 'react'
import axios from 'axios'
import RentalContext from './rentalContext';
import RentalReducer from './rentalReducer';
import {
  FETCH_RENTALS,
  FETCH_RENTAL_BY_ID,
  RENTAL_ERROR,

} from '../types';

const RentalState = props => {
  const initialState = {
    loading: true,
    rentals: null,
    rental: null,
    error: null
  }
  const [state, dispatch] = useReducer(RentalReducer, initialState);

  const fetchRentals = async () => {
    try {
      const res = await axios.get('/api/v1/rentals');
      dispatch({
        type: FETCH_RENTALS ,
        payload: res.data
      })
    }
    catch (error) {
      dispatch({
        type: RENTAL_ERROR ,
        payload: error.errors
      })
    }
  }

  const fetchRentalByid = async (id) => {

    try {
      const res = await axios.get(`/api/v1/rentals/${id}`);
        dispatch({
          type: FETCH_RENTAL_BY_ID ,
          payload: res.data
        })
    }
    catch (error) {
      dispatch({
        type: RENTAL_ERROR ,
        payload: error.message
      })
    }
  }






  return <RentalContext.Provider value={{
    loading: state.loading,
    rentals: state.rentals,
    rental: state.rental,
    error: state.error,
    fetchRentals,
    fetchRentalByid


  }}>
    {props.children}
  </RentalContext.Provider>
}

export default RentalState
