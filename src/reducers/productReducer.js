import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS } from '../actions/types';

const initialState = {
  loading: false,
  products: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.data.products
      };
    default:
      return state;
  }
}
