import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addComment } from '../actions';

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
	submitComment = () => {
		this.props.store.dispatch(addComment({
			title: this.title.value,
			author: this.author.value,
			body: this.body.value
		}))
		this.title.value = ''
		this.author.value = ''
		this.body.value = ''
	}
	render() {
		const { comments } = this.state;
		return(
			<div>
				<form onSubmit={(e) => e.preventDefault()}>
					<input 
						type="text"
						placeholder="Title"
						ref={(input) => this.title = input}
					/>
					<input 
						type="text" 
						placeholder="Author"
						ref={(input) => this.author = input}/>
					<textarea
						type="text" 
						placeholder="Comment content"
						ref={(textarea) => this.body = textarea}>
					</textarea>
					<button onClick={this.submitComment}>Submit</button>
				</form>
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