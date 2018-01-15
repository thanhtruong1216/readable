import * as Actions from '../actions/PostActions';

export const post = ( state = {}, action ) => {
  const { type, post } = action;
  switch(type) {
    case Actions.FETCH_DETAILS_POST:
      return post;
    default:
      return state;
  }
}