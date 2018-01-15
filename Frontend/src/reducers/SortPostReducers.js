import * as Actions from '../actions/PostActions';

const defaultState = { sortField: null, asc: null };

export const sortPost = (state = defaultState, action) => {
  const {type, sortField, asc} = action;
  switch(type) {
    case Actions.SORT_POST:
      return {sortField, asc};
    default:
      return state;
  }
}

