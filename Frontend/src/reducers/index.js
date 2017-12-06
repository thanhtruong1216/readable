import { combineReducers } from 'redux';
import * as Actions from '../actions/index';

const comments = (state = [], action) => {
	const {type, ...object} = action;
	switch(action.type) {
		case Actions.ADD_COMMENT:
			state.push(object)
			return state;
		default:
			return state;
	}
}

const posts = (state = [], action) => {
	const {type, ...object} = action;
	switch(type) {
		case Actions.FETCH_POST:
			return object.posts;
		case Actions.ADD_POST:
			state.push(object);
			return state
		default:
			return state;
	}
}

export default combineReducers({
  comments,
  posts
});