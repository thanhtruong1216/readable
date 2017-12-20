import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import CreateComment from './CreateComment';
import Comments from './Comments';
import './Posts.css';
import CreatePost from './CreatePost';
import * as PostAPI from '../APIS/PostsAPI';
import { deletePost } from '../actions';
import { editPost } from '../actions';
import Post from './Post';

class Posts extends Component {	
	render() {
		const { posts } = this.props;
		return(
			<div className="main">
				{posts.map((post, index) => <Post post={post} key={index} />)}
			</div>
		);
	}
}

Posts.propTypes = {
	// id: PropTypes.string.isRequired,
	// timestamp: PropTypes.number.isRequired,
	// title: PropTypes.string.isRequired,
	// body: PropTypes.string.isRequired,
	// author: PropTypes.string.isRequired,
	// category: PropTypes.string.isRequired,
	// voteScore: PropTypes.number.isRequired,
	// deleted: PropTypes.string.isRequired
}

export default Posts
