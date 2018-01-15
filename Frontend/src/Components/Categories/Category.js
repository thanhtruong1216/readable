import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import Posts from '../Posts/Posts';
import { Link } from 'react-router-dom';
import { sortPost } from '../../actions/PostActions';

class Category extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts || [],
      sortField: null,
      asc: null
    }
  }

  componentWillReceiveProps({posts}) {
    this.setState({posts});
  }

  increaseSort = (e) => {
    e.preventDefault();
    this.props.sortPostHandler({
      sortField: 'voteScore',
      asc: true,
    })
  }

  decreaseSort = (e) => {
    e.preventDefault();
    this.props.sortPostHandler({
      sortField: 'voteScore',
      asc: false,
    })
  }

  soonSort = (e) => {
    e.preventDefault()
    this.props.sortPostHandler({
      sortField: 'timestamp',
      asc: false,
    })
  }

  lateSort = (e) => {
    e.preventDefault()
    this.props.sortPostHandler({
      sortField: 'timestamp',
      asc: true,
    })
  }
  render() {
    const { category } = this.props;
    const { posts } = this.props;
    const categoryLink = `/categories/${ category.name }`;
		return(
			<div className="category-container">
				<Link className="link category-link" to={categoryLink}>{category.name} CATEGORY</Link>
        <div>
          <label>Sort by score</label>
          <button onClick={this.increaseSort}>Increasing</button>
          <button onClick={this.decreaseSort}>Decreasing</button>
        </div>
        <div>
          <label>Sort by time stamp</label>
          <button onClick={this.soonSort}>Soon</button>
          <button onClick={this.lateSort}>Late</button>
        </div>
				<Posts posts={posts} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
  const { category } = ownProps;
  const { posts, sortPost } = state;
  const { sortField, asc } = sortPost;
  let sortedPosts = posts.filter(post => post.category === category.name);
  if(sortField !== null && asc !== null) {
    switch(sortField) {
      case 'voteScore': 
        if (asc) {
          sortedPosts.sort(function(a,b) {
            return a.voteScore - b.voteScore
          });
        } else {
          sortedPosts.sort(function(a,b) {
            return b.voteScore - a.voteScore
          });
        }

        break;
      case 'timestamp':
        if (asc) {
          sortedPosts.sort(function(a,b) {
            return a.timestamp - b.timestamp;
          });
        } else {
          sortedPosts.sort(function(a,b) {
            return b.timestamp - a.timestamp;
          });
        }
        break;
    }
  }

  return {
    posts: sortedPosts,
    sortField,
    asc
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sortPostHandler: ({sortField, asc}) => {
      dispatch(sortPost({sortField, asc})) 
    }
  }
}

Category.proptypes = {
	posts: Proptypes.array.isRequired,
  category: Proptypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
