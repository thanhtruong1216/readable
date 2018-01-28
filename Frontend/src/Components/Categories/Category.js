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

  voteScoreSort = (e) => {
    e.preventDefault();
    const { asc } = this.props;
    this.props.sortPostHandler({
      sortField: 'voteScore',
      asc: !asc,
    })
  }

  timestampSort = (e) => {
    e.preventDefault();
    const { asc } = this.props;
    this.props.sortPostHandler({
      sortField: 'timestamp',
      asc: !asc,
    })
  }

  render() {
    const { category, sortField, asc } = this.props;
    const { posts } = this.props;
    const categoryLink = `/categories/${ category.name }`;
    let voteScoreIndicator = '';

    if(sortField === 'voteScore') {
      voteScoreIndicator = asc ? '↑' : '↓';
    }

    let timestampIndicator = '';
    if(sortField === 'timestamp') {
      timestampIndicator = asc ? '↑' : '↓';
    }

    let voteScoreSortEl = <button className="sort" onClick={this.voteScoreSort}>Sort by votes{voteScoreIndicator}</button>;
    let timestampSortEl = <button className="sort" onClick={this.timestampSort}>Sort by time{timestampIndicator}</button>;

		return(
			<div className="category-container">
				<Link className="link category-link" to={categoryLink}>{category.name} CATEGORY</Link>
        <div className="sort-buttons">
          {voteScoreSortEl}
          {timestampSortEl}
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
      default:
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
