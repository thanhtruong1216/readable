import * as Actions from '../actions/PostActions';

export const post = ( state = {}, action ) => {
  const { type, post } = action;
  switch(type) {
    case Actions.FETCH_DETAILS_POST:
      return post;
    case Actions.EDIT_POST:
      return (() => {
        const { type, ...post } = action;
        return post;
      })()
    case Actions.DELETE_POST:
      return {}
    case Actions.VOTE_UP_POST:
      return (() => {
        const { type, ...post } = action;
        if(post.id === state.id) {
          return {
            ...state,
            voteScore: state.voteScore + 1
          };
        } else {
          return state
        }
      })()
    case Actions.VOTE_DOWN_POST:
      return (() => {
        const { type, ...post } = action;
        if(post.id === state.id) {
          return {
            ...state,
            voteScore: state.voteScore - 1
          };
        } else {
          return state
        }
      })()
    default:
      return state;
  }
}