import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comments extends Component {
	state = {
		comments: null
	}
	componentDidMount() {
		fetch('http://localhost:3001/posts/8xf0y6ziyjabvozdd253nd/comments', { headers: { 'Authorization': 'whatever-you-want'}})
		.then(results => results.json())
		.then(({comments}) => {
			this.setState({comments})
		})
	}
	render() {
		const { comments } = this.state;
		const commentElements = comments && comments.map((comment) => {
			return(
				<div key={comment.id}>
					<div>{comment.author}</div>
					<div>{comment.body}</div>
				</div>
			)
		})
		return(
			<div>
				<div>{commentElements}</div>
				<form>
					<input type="text" placeholder="Create a comment"/>
					<button>Submit Comment</button>
				</form>
			</div>
		);
	}
}
Comments.propTypes = {
	id: PropTypes.string.isRequired,
	parentId: PropTypes.string.isRequired,
	timestamp: PropTypes.number.isRequired,
	body: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	voteScore: PropTypes.number.isRequired,
	deleted: PropTypes.string.isRequired,
	parentDeleted: PropTypes.string.isRequired
}
export default Comments