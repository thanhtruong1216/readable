import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { connect } from 'react-redux';

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
const mapStateToProps = state => {
  return {
    // posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}
Posts.propTypes = {
	posts: PropTypes.array.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);


