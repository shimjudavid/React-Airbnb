import {
  FETCH_RENTALS,
  FETCH_RENTAL_BY_ID,
  RENTAL_ERROR,

} from '../types';

export default (state, action) => {
  switch (action.type) {

      case FETCH_RENTALS :
        return {
          ...state,
          rentals: action.payload,
          rental: null,
          loading: false
        }

      case RENTAL_ERROR:
      return {
        ...state,
        error:action.payload
      }

    case FETCH_RENTAL_BY_ID:
          return {
            ...state,
            rental: action.payload,
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