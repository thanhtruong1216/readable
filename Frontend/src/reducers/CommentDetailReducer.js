import * as Actions from '../actions/CommentActions';

export const comment = ( state = {}, action ) => {
  const { type, comment } = action;
  switch(type) {
    case Actions.FETCH_DETAIL_COMMENT:
      return comment;
    case Actions.VOTE_UP:
    default:
      return state;
  }
}