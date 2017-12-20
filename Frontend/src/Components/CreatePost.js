import React, { Component } from 'react';
import PropTypes from 'prop-types';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { combineReducers } from "redux";
import { reduxForm } from 'redux-form';
import FormCreatePost from './FormCreatePost';


class CreatePost extends Component {
	state = {
		showCreatePost: false
	}

	createPost = () => {
		const { showCreatePost } = this.state;
		this.setState({
			showCreatePost: !showCreatePost
		})
	}

	render() {
		const { store } = this.props;
		let createPostForm = null;
		let buttonCreatePostText= 'Create post';
		if(this.state.showCreatePost) {
			createPostForm = <FormCreatePost store={store}/>
			buttonCreatePostText = 'Cancel'
		}
		return(
			<div>
				<button onClick={this.createPost}>{buttonCreatePostText}</button>
				<div>{createPostForm}</div>
			</div>
		)
	}
}
CreatePost.propTypes = {
	store: PropTypes.object.isRequired
}
export default CreatePost;