import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class Comments extends Component {
	render() {
    const { comments, postId } = this.props;
		return(
			<div className="main-comments">
        {comments[postId] && comments[postId].map((comment, index) =>
           <Comment key={ index } comment={ comment }/> )}
			</div>
		);
	}
}

Comments.propTypes = {
	comments: PropTypes.object.isRequired
}
export default Comments;