export const FETCH_POST = 'FETCH_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST'


export function fetchPost({ posts }) {
	return {
		type: FETCH_POST,
		posts
	}
}

export function addPost({ id, title, body, author, category, timestamp}) {
	return {
		type: ADD_POST,
		id,
		title,
		body,
		author,
		category,
		timestamp
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

