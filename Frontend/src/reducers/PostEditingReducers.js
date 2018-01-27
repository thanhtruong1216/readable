import * as Actions from '../actions/PostActions';

export const postEdittings = ( state = {}, action ) => {
  switch(action.type) {
    case Actions.TOGGLE_EDIT_POST:
      return {
        ...state,
        [action.post.id]: !state[action.post.id]
      };
    default:
      return state;
  }
}

