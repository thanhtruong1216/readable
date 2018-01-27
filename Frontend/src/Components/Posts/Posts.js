import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

class Posts extends Component {	
	render() {
		const { posts } = this.props;
		return(
			<div className="main">
				{ posts.map((post, index) => <Post post={post} key={index} />)}
			</div>
		);
	}
}

Posts.propTypes = {
	posts: PropTypes.array.isRequired
}
export default Posts;

