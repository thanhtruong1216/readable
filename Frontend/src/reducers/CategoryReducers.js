import * as Actions from '../actions/CategoryActions';

export const categories = ( state = [], action ) => {
  const { type, categories } = action;
  switch(type) {
    case Actions.FETCH_CATEGORIES_EXISTING:
      return categories;
    default:
      return state;
  }
}
