import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Posts.css';
import Post from './Post';

class Posts extends Component {	
	render() {
		const { posts, postId, post } = this.props;
		return(
			<div className="main">
				{posts.map((post, index) => <Post post={post} key={index} postId={post.id}/>)}
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
