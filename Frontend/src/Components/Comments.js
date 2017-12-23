import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class Comments extends Component {
	render() {
		const { postId, comments, post} = this.props;

    debugger
		return(
			<div>
				{ comments[postId] && comments[postId].map((comment, index) => <Comment key={index} comment={ comment }/> )}
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