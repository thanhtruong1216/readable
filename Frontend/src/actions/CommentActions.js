export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const VOTE_UP = 'VOTE_UP';
export const VOTE_DOWN = 'VOTE_DOWN'
export const FETCH_DETAIL_COMMENT = "FETCH_DETAIL_COMMENT";
export function fetchComments({ comments, postId }) {
  return {
    type: FETCH_COMMENTS,
    comments,
    postId
  }
}

export function addComment({ comment }) {
  return {
    type: ADD_COMMENT,
    comment
  }
}
export function deleteComment({ comment }) {
  return {
    type: REMOVE_COMMENT,
    comment
  }
}
export function editComment({ comment }) {
  return {
    type: EDIT_COMMENT, 
    comment
  }
}
export function voteUp({ comment }) {
  return {
    type: VOTE_UP,
    comment
  }
}

export function voteDown ({ comment }) {
  return {
    type: VOTE_DOWN,
    comment
  }
}
export function fetchDetailComment({comment}) {
  return {
    type: FETCH_DETAIL_COMMENT,
    comment
  }
}

