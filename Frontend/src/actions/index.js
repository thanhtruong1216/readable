export const FETCH_POST = 'FETCH_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export function fetchCategories({ categories }) {
	return {
		type: FETCH_CATEGORIES,
		categories
	}
}
export function fetchPost({ posts }) {
	return {
		type: FETCH_POST,
		posts
	}
}

export function addPost(post) {
	return {
		type: ADD_POST,
		...post
	}
}

export function deletePost({ id }) {
	return {
		type: DELETE_POST,
		id
	}
}

export function editPost(post) {
	return {
		type: EDIT_POST,
		...post
	}
}

export function fetchComments({ comments, postId }) {
	return {
		type: FETCH_COMMENTS,
		comments,
		postId
	}
}

