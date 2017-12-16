import { combineReducers } from 'redux';
import * as Actions from '../actions/index';

// const comments = (state = [], action) => {
// 	const {type, ...object} = action;
// 	switch(action.type) {
// 		case Actions.ADD_COMMENT:
// 			state.push(object)
// 			return state;
// 		default:
// 			return state;
// 	}
// }

const posts = (state = [], action) => {
	const {type, ...object} = action;
	switch(type) {
		case Actions.FETCH_POST:
			return object.posts;
		case Actions.ADD_POST:
			state.push(object);
			return state;
		case Actions.DELETE_POST:
			return state.filter((p) => p.id != object.id)
		case Actions.EDIT_POST:
			return state.map(post => post.id === object.id ? object : post)
			// return state.map((post) => {
			// 	if(post.id === object.id) {
			// 		return object;
			// 	} else {
			// 		return post;
			// 	}
			// })
		default:
			return state;
	}
}

export default combineReducers({
  posts
});