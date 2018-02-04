import axios from 'axios';
import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS } from './types';
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/types';

export const fetchProducts = searchQuery => async dispatch => {
  dispatch({ type: FETCH_PRODUCTS });
  const res = await axios.get(
    `https://www.adidas.co.uk/api/suggestions/${searchQuery}`
  );
  dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res });
};

export const addToWishlist = product => dispatch => {
  dispatch({ type: ADD_TO_WISHLIST, payload: product });
};

export const removeFromeWishlist = product => dispatch => {
  dispatch({ type: REMOVE_FROM_WISHLIST, payload: product });
};
