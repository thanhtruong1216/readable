import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateComment from './CreateComment';
import Comments from './Comments';
import './Posts.css';
import CreatePost from './CreatePost';
import * as PostAPI from '../APIS/PostsAPI';
import { deletePost } from '../actions';
import { editPost } from '../actions';
import Post from './Post';

class Posts extends Component {
	state = {
		posts: null
	}

	componentDidMount() {
		const { store } = this.props;
		store.subscribe(() => {
			const { posts } = this.props.store.getState();
			this.setState({posts});
		})
	}
	
	render() {
		const { posts } = this.state;
		const { store } = this.props;
			return(
				<div className="main">
					<CreatePost store={store}/>
						{posts && posts.map((post, index) => (
							<Post xpost={post} key={index} store={store} />
					))}
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