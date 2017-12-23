import React, { Component } from 'react';
import PropTypes from 'prop-types';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { combineReducers } from "redux";
import { reduxForm } from 'redux-form';
import FormCreatePost from './FormCreatePost';


class CreatePost extends Component {
	state = {
		openCreatePostForm: false
	}

	createPost = () => {
		const { openCreatePostForm } = this.state;
		this.setState({
			openCreatePostForm: !this.state.openCreatePostForm
		})
	}

	render() {
		const { store } = this.props;
		let createPostForm = null;
		let createPostButtonText= 'Create post';
		if(this.state.openCreatePostForm) {
			createPostForm = <FormCreatePost/>
			createPostButtonText = 'Discard'
		}
		return(
			<div>
				<button onClick={this.createPost}>{ createPostButtonText }</button>
				<div>{ createPostForm }</div>
			</div>
		)
	}
}
CreatePost.propTypes = {
	store: PropTypes.object.isRequired
}
export default CreatePost;