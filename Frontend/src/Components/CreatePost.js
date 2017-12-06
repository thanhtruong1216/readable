import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addPost } from '../actions';
import * as PostAPI from '../APIS/PostsAPI';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { combineReducers } from "redux";
import { reduxForm } from 'redux-form';

class CreatePost extends Component {
	state = {
		showCreatePost: false
	}

	submitPost = () => {
		if(this.title.value === '' || this.author.value === '' || this.body.value === '') {
			alert('Record not accept empty')
			return false;
		}

		const post = {
			title: this.title.value,
			author: this.author.value,
			body: this.body.value
		};

		console.log({post});

		PostAPI.createPost(post).then(() => this.props.store.dispatch(addPost(post)));

		this.title.value = ''
		this.author.value = ''
		this.body.value = ''
	}

	createPost = () => {
		this.setState({
			showCreatePost: !this.state.showCreatePost
		})
	}

	render() {
		let createPostForm = null;
		let buttonCreatePostText= 'Create post';
		if(this.state.showCreatePost) {
			createPostForm = (
			<form onSubmit={ (e) => { e.preventDefault() } }>
				<input 
					type="text" 
					placeholder="Title" 
					ref={(input) => this.title = input}
				/>
				<input 
					type="text"
					placeholder="Author"
					ref={(input) => this.author = input}
				/>
				<input
					type="text"
					placeholder="Post content"
					ref={(input) => this.body = input}
				/>

				<button onClick={this.submitPost}>Submit</button>
			</form>
		)
			buttonCreatePostText = 'Cancel'
		}
		return(
			<div>
				<button onClick={this.createPost}>{buttonCreatePostText}</button>
				{createPostForm}
			</div>
		)
	}
}
CreatePost.propTypes = {
	store: PropTypes.object.isRequired
}
export default CreatePost;