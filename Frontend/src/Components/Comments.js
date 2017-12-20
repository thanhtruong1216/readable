import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateComment from './CreateComment';
import Comment from './Comment';

class Comments extends Component {
	render() {
		const { postId, comments, comment, posts } = this.props;
		console.log("Comments")
		return(
			<div>
				{ postId[comments] && postId[comments].map((comment, index) => <Comment key={index} comment={ postId[comments].comment }/> )}
			</div>
		);
	}
}
const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

Comments.propTypes = {
		store: PropTypes.object.isRequired,
// 	id: PropTypes.string.isRequired,
// 	parentId: PropTypes.string.isRequired,
// 	timestamp: PropTypes.number.isRequired,
// 	body: PropTypes.string.isRequired,
// 	author: PropTypes.string.isRequired,
// 	voteScore: PropTypes.number.isRequired,
// 	deleted: PropTypes.string.isRequired,
// 	parentDeleted: PropTypes.string.isRequired
}
export default Comments