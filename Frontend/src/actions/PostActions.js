export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_CATEGORY_POSTS = 'FETCH_CATEGORY_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST'
export const FETCH_DETAILS_POST = 'FETCH_DETAILS_POST';
export const VOTE_UP_POST = 'VOTE_UP_POST';
export const VOTE_DOWN_POST = 'VOTE_DOWN_POST';
export const SORT_POST = "SORT_POST";

export function fetchPosts({ posts }) {
  return {
    type: FETCH_POSTS,
    posts
  }
}
export function fetchCategoryPosts({ posts }) {
  return {
    type: FETCH_CATEGORY_POSTS,
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


export function voteUpPost({ id }) {
  return {
    type: VOTE_UP_POST,
    id
  }
}

export function voteDownPost({ id }) {
  return {
    type: VOTE_DOWN_POST,
    id
  }
}

export function fetchDetailsPost({ post }) {
  return {
    type: FETCH_DETAILS_POST,
    post
  }
}

// export function sortPostIncrease({posts}) {
//   type: SORT_POST_INCREASE,
//   posts
// }

export function sortPost({sortField, asc}) {
  return {
    type: SORT_POST,
    sortField,
    asc
  }
}

