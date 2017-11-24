import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addPost } from '../actions'
import Comments from './Comments';
import './Posts.css';

class Posts extends Component {
	state = {
		posts: null,
		showCreatePost: false
	}

	componentDidMount() {
		const { store } = this.props
		store.subscribe(() => {
			console.log({state: store.getState()})
			this.setState({posts: store.getState().posts})
		})
	}

	submitPost = () => {
		if(this.title.value === '' || this.author.value === '' || this.body.value === '') {
			alert('Record not accept empty')
			return false;
		}
		this.props.store.dispatch(addPost({
			title: this.title.value,
			author: this.author.value,
			body: this.body.value,
		}))
		this.title.value = ''
		this.author.value = ''
		this.body.value = ''
	}

	render() {
		const { posts } = this.state;
		const { store } = this.props;
		return(
			<div className="main">
				<form onSubmit={ e => { e.preventDefault() }}>
					<input 
						type="text" 
						placeholder="Title" 
						ref={(input) => this.title = input}/>
					<input 
						type="text"
						placeholder="Author"
						ref={(input) => this.author = input}/>
					<textarea
						type="text"
						placeholder="Post content"
						ref={(textarea) => this.body = textarea}>
					</textarea>
					<button onClick={this.submitPost}>Submit</button>
				</form>
				{posts && posts.map((post, index) => (
					<div className="posts-container" key={index}>
						<div className="title-author-container">
							<div className='title'>{post.title}</div>
							<div className='author'>{post.author}</div>
						</div>
						<div>{post.body}</div>
					</div>
				))}
				<div>
					<h3>Create a comment</h3>
					<Comments store={store}/>
				</div>
			</div>
		);
	}
}
Posts.propTypes = {
	store: PropTypes.object.isRequired,
	// id: PropTypes.string.isRequired,
	// timestamp: PropTypes.number.isRequired,
	// title: PropTypes.string.isRequired,
	// body: PropTypes.string.isRequired,
	// author: PropTypes.string.isRequired,
	// category: PropTypes.string.isRequired,
	// voteScore: PropTypes.number.isRequired,
	// deleted: PropTypes.string.isRequired
}
export default Posts;