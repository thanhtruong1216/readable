import * as Actions from '../actions/PostActions';

export const posts = ( state = [], action ) => {
  const { type, posts, post, ...object } = action;
  switch(type) {
    case Actions.FETCH_POSTS:
      return posts;
    case Actions.ADD_POST:
      return [...state, object];
    case Actions.DELETE_POST:
      return state.filter((p) => p.id !== object.id);
    case Actions.EDIT_POST:
      return state.map(post => post.id === object.id ? object : post);      
    case Actions.FETCH_CATEGORY_POSTS:
      return [...state, ...posts];
    case Actions.VOTE_UP_POST:
      return state.map(function(post) {
        if(post.id === object.id) {
          return {
            ...post,
            voteScore: post.voteScore + 1
          };
        } else {
          return post
        }
      })
    case Actions.VOTE_DOWN_POST:
      return state.map(function(post) {
        if(post.id === object.id) {
          return {
            ...post,
            voteScore: post.voteScore - 1
          };
        } else {
          return post
        }
      })
    default:
      return state;
  }
}

