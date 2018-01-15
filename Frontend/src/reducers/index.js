import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { categories } from './CategoryReducers';
import { posts } from './PostReducers';
import { comments } from './CommentReducers';
import { post } from './PostDetailReducer';
import { sortPost } from './SortPostReducers';
import { comment } from './CommentDetailReducer';
export default combineReducers({ comments, posts, categories, routing, post, comment, sortPost });
