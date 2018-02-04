import { combineReducers } from 'redux';
import productReducer from './productReducer';
import wishlistReducer from './wishlistReducer';

export default combineReducers({
  productReducer: productReducer,
  wishlistReducer: wishlistReducer
});
