import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Posts extends Component {
	state = {
		posts: null
	}
	componentDidMount() {
		fetch('http://localhost:3001/posts', { headers: { 'Authorization': 'whatever-you-want2'}})
		.then(results => results.json())
		.then(({posts}) => {
			this.setState({posts})
			console.log(posts)
		})
	}
	render() {
		const { posts } = this.state;
		const postsElements = posts && posts.map((post) => {
			return(
				<div key={post.id}>
					<div>{post.author}</div>
					<div>{post.body}</div>
				</div>
			)
		})
		return(
			<div>
				<div>{postsElements}</div>
				<form>
					<input type="text" placeholder="Create a post" />
					<button>Submit post</button>
				</form>
			</div>
		);
	}
}
Posts.propTypes = {
	id: Proptypes.string.isRequired,
	timestamp: Proptypes.number.isRequired,
	title: Proptypes.string.isRequired,
	body: Proptypes.string.isRequired,
	author: Proptypes.string.isRequired,
	category: Proptypes.string.isRequired,
	voteScore: Proptypes.number.isRequired,
	deleted: Proptypes.string.isRequired
}
export default Posts;