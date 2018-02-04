import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/types';

const initialState = {
  wishlist: []
};
export default function(state = initialState, action) {
  console.log(state.wishlist);
  switch (action.type) {
    case ADD_TO_WISHLIST:
      state.wishlist.push(action.payload);
      return {
        ...state
      };
    case REMOVE_FROM_WISHLIST:
      state.wishlist = state.wishlist.filter(
        pr => pr.url !== action.payload.url
      );
      return {
        ...state
      };
    default:
      return state;
  }
}
