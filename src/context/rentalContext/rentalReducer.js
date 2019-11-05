import {
  FETCH_RENTALS,
  FETCH_RENTAL_BY_ID,
} from '../types';

export default (state, action) => {
  switch (action.type) {

      case FETCH_RENTALS :
        return {
          ...state,
          rentals: action.payload,
          loading: false
        }

    case FETCH_RENTAL_BY_ID:
          return {
            ...state,
            rental: action.payload,
            loading: false

          }


        case "CLEAR_USERS":
            return {
              ...state,
              users: [],
              loading: false
            }



        case "GET_REPOS":
            return {
              ...state,
              repos: action.payload,
              loading: false
            }

    default:
      return state;
  }
}