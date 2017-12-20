import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import Posts from './Posts';
import Comments from './Comments';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts || []
    }
  }

  componentWillReceiveProps({posts}) {
    this.setState({posts});
  }

	render() {
    const { category } = this.props;
		const { posts } = this.state;
		const categoryPosts = posts.filter(post => post.category === category.name);
		return(
			<div>
				<h1>{category.name.toUpperCase()}</h1>
				<Posts posts={categoryPosts} />
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}
// Category.proptypes = {
// 	name: Proptypes.array.isRequire,
// 	path: Proptypes.string.isRequire
// }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);