export const ADD_POST = 'ADD_POST';
// export const ADD_COMMENT = 'ADD_COMMENT';

// export const USER_COMMENT_POST = 'USER_COMMENT_POST';
// export const ANOTHER_USER_COMMENT_POST = 'ANOTHER_USER_COMMENT_POST';

// export const VOTE_ON_POST = 'VOTE_ON_POST';
// export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT'

// export const EDIT_POST = 'EDIT_POST';
// export const EDIT_COMMENT = 'EDIT_COMMENT';

// export const DELETE_POST = 'DELETE_POST';
// export const DELETE_COMMENT = 'EDIT_COMMENT';

export function addPost({ id,timestamp,title,body,author,category,voteScore,deleted }) {
	return {
		type: ADD_POST,
		id,
		timestamp,
		title,
		body,
		author,
		category,
		voteScore,
		deleted
	}
}
// export function addComment({ id,parentID,timestamp,body,author,voteScore,parentDeleted,deleted }) {
// 	return {
// 		type: ADD_COMMENT,
// 		id,
// 		parentID,
// 		timestamp,
// 		body,
// 		author,
// 		voteScore,
// 		parentDeleted,
// 		deleted
// 	}
// }
// export function userCommentPost({ body, author }) {
// 	type: USER_COMMENT_POST,
// 	body,
// 	author
// }
// export function anotherUserCommentPost({ body, author}) {
// 	type: ANOTHER_USER_COMMENT_POST,
// 	body,
// 	author
// }
// export function voteOnPost({ voteScore }) {
// 	type: VOTE_ON_POST,
// 	voteScore
// }
// export function voteOnComment({ voteScore }) {
// 	type: VOTE_ON_COMMENT,
// 	voteScore
// }
// export function editPost({ body, author }) {
// 	type: EDIT_POST,
// 	body,
// 	author
// }
// export function editComment({ body, author }) {
// 	type: EDIT_POST,
// 	body,
// 	author
// }
