import React, { Component } from 'react';
import { addComment } from '../actions';

class CreateComment extends Component {
	state = {
		showCreateComment: false
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

	createComment = () => {
		this.setState({
			showCreateComment: !this.state.showCreateComment
		})
	}
	
	render() {
		let createCommentForm = null;
		let buttonCreateCommentText = 'Comment';

		if(this.state.showCreateComment) {
			createCommentForm= (
				<form onSubmit={(e) => { e.preventDefault() } }>
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
			)
			buttonCreateCommentText = 'Exit'
		}
		return(
			<div>
				<button onClick={this.createComment}>{buttonCreateCommentText}</button>
				{createCommentForm}
			</div>
		);
	}
}
export default CreateComment;