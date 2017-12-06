import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateComment from './CreateComment';

class Comments extends Component {
	state = {
		comments: null
	}

	componentDidMount() {
		const { store }  = this.props;
		store.subscribe(() => {
			this.setState({comments: store.getState().comments})
		})
	}

	render() {
		const { comments } = this.state;
		return(
			<div>
				{comments && comments.map((comment, index) => {
					return(
						<div key={index}>
							<div>{comment.author}</div>
							<div>{comment.body}</div>
						</div>
					)
				})}
			</div>
		);
	}
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