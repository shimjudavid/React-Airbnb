import React, { useReducer} from 'react'
import RentalContext from './rentalContext';
import RentalReducer from './rentalReducer';
import {
  FETCH_RENTALS,
  FETCH_RENTAL_BY_ID,
} from '../types';

const RentalState = props => {
  const initialState = {
    loading: true,
    rentals: [],
    rental: {},
  }

  const initialRentals = [
    {
      id: "1",
      title: 'Water-Front',
      city: 'San Francisco',
      street: 'Lombard Street',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 3,
      description: 'Very Nice apartment',
      dailyRate: '89.00',
      shared: false,
      createdAt: '24/23/2019'
    },
    {
      id: "2",
      title: 'Hill View',
      city: 'New York',
      street: 'Times Square',
      category: 'house',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 3,
      description: 'Very Nice apartment',
      dailyRate: '34.00',
      shared: true,
      createdAt: '24/23/2019'
    },
    {
      id: "3",
      title: 'Marvelous Condo',
      city: 'Portland',
      street: '82nd Avenue',
      category: 'condo',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 3,
      description: 'Very Nice apartment',
      dailyRate: '25.00',
      shared: false,
      createdAt: '24/23/2019'
    },
    {
      id: "4",
      title: 'Valley View',
      city: 'Phoenix',
      street: 'Charter Oak Rd',
      category: 'house',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 3,
      description: 'Very Nice apartment',
      dailyRate: '45.00',
      shared: true,
      createdAt: '24/23/2019'
    }
  ];



  const [state, dispatch] = useReducer(RentalReducer, initialState);

  const fetchRentals = () => {
    dispatch({
      type: FETCH_RENTALS ,
      payload: initialRentals
    })
  }

  const fetchRentalByid = (id) => {
    const selected_rental = initialRentals.find((rental) => rental.id === id);
    debugger;
    dispatch({
      type: FETCH_RENTAL_BY_ID ,
      payload: selected_rental
    })
  }

  return <RentalContext.Provider value={{
    loading: state.loading,
    rentals: state.rentals,
    rental: state.rental,
    fetchRentals,
    fetchRentalByid,

  }}>
    {props.children}
  </RentalContext.Provider>
}

export default RentalState
