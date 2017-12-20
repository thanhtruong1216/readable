import { combineReducers } from 'redux';
import * as Actions from '../actions/index';

const categories = ( state = [], action ) => {
	const { type, categories } = action;
	switch(type) {
		case Actions.FETCH_CATEGORIES:
			return categories;
		default:
			return state;
	}
}

const posts = ( state = [], action ) => {
	const {type, ...object} = action;
	switch(type) {
		case Actions.FETCH_POST:
			return object.posts;
		case Actions.ADD_POST:
			return [...state, object];
		case Actions.DELETE_POST:
			return state.filter((p) => p.id != object.id);
		case Actions.EDIT_POST:
			return state.map(post => post.id === object.id ? object : post);
		default:
			return state;
	}
}

const comments = ( state = {}, action ) => {
	const { type, comments, ...object } = action;
	switch(type) {
		case Actions.FETCH_COMMENTS:
			return {
				...state, 
				[object.postId]: comments
			}
		default:
			return state;
	}
}

export default combineReducers({ posts, categories, comments });
