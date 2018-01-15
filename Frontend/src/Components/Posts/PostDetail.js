import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchDetailsPost } from '../../actions/PostActions';
import * as PostAPI from '../../APIS/PostsAPI';
import { Link } from 'react-router-dom';

class PostDetail extends Component {

  componentWillMount() {
    const { PostDetailHandler, match } = this.props;
    const postId = match.params.id;
    PostAPI.getDetailPost({id: postId})
      .then(response => response.json())
      .then(post => { PostDetailHandler(post) })
  }
  render() {
    const { match, post } = this.props;
    return(
      <div className="post-detail-container">
        {/*<Link to="/">
          <img src="http://www.freepngimg.com/download/arrow/1-2-arrow-png-image.png" alt="arrow"/>
        </Link>*/}
        <h3 className="post-detail-header">Post id: {match.params.id} </h3>
        <div className="post-detail-content">
          <div>Time stamp: {(new Date(post.timestamp)).toString()}</div>
          <div>Title: {post.title}</div>
          <div>Body: {post.body}</div>
          <div>Author: {post.author}</div>
          <div>Category: {post.category}</div>
          <div>Vote score: {post.voteScore}</div>
          <div>Delected: {post.delected}</div>
          <div>Comment count: {post.commentCount}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    post: state.post
  }
}
const mapDispatchToProps = dispatch => {
  return {
    PostDetailHandler: (post) => {
      dispatch(fetchDetailsPost({post}))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);

