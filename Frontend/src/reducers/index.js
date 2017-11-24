import * as Actions from '../actions/index';

const appReducer = (state = {posts: [], comments: [] }, action) => {
	const { type, ...object } = action;
	switch(type) {
		case Actions.ADD_POST:
			state.posts.push(object);
			return state;
		case Actions.ADD_COMMENT:
			state.comments.push(object);
			return state;
		// case Actions.USER_COMMENT_POST:
		// 	return state.push(object => object.author,object.body);
		// case Actions.ANOTHER_USER_COMMENT_POST:
		// 	return: state.push(object => object.author, object.body);
		// case Actions.VOTE_ON_POST:
		// 	return state.push(object => object.voteScore);
		// case Actions.VOTE_ON_COMMENT:
		// 	return state.push(object => object.voteScore);
		// case Actions.EDIT_POST:
		// 	return state.filter(object => object.id === object.id);
		// case Actions.EDIT_COMMENT:
		// 	return state.filter(object => object.id === object.id);
		// case Actions.DELETE_POST:
		// 	return state.filter(object => object.author !== action.author);
		default:
			return state;
	}
}

export default appReducer;	