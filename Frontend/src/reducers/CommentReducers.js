import * as Actions from '../actions/CommentActions';

export const comments = ( state = {}, action ) => {
  const { type, comments, comment, ...object } = action;
  let postComments;
  let voteUpComments;
  let voteDownComments;
  switch(type) {
    case Actions.FETCH_COMMENTS:
      return {
        ...state, 
        [object.postId]: comments
      }
    case Actions.ADD_COMMENT:
      return {
        ...state,
        [action.comment.parentId]: [
          ...(state[action.comment.parentId] || []),
          action.comment
        ]
      }
    case Actions.REMOVE_COMMENT:
      return {
        ...state,
        [action.comment.parentId]: state[action.comment.parentId].filter((c) => c.id !== action.comment.id)
      }
    case Actions.EDIT_COMMENT:
      postComments = state[action.comment.parentId];
      return {
        ...state,
        [action.comment.parentId]: postComments.map((c) => c.id === action.comment.id ? action.comment: c)
      }
    case Actions.VOTE_UP:
      voteUpComments = state[action.comment.parentId]
      return {
        ...state,
        [action.comment.parentId]: voteUpComments.map(function(comment) {
          if(comment.id === action.comment.id) {
            return {
              ...comment,
              voteScore: comment.voteScore + 1
            };
          } else {
            return comment
          }
        })
      }
    case Actions.VOTE_DOWN:
      voteDownComments = state[action.comment.parentId];
      return {
        ...state,
        [action.comment.parentId]: voteDownComments.map(function(comment) {
          if(comment.id === action.comment.id) {
            return {
              ...comment,
              voteScore: comment.voteScore - 1
            }
          } else {
            return comment
          }
        })
      }
    default:
      return state;
  }
}
