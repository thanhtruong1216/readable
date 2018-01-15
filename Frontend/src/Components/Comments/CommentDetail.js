import React, { Component } from 'react';
import * as CommentsAPI from '../../APIS/CommentsAPI';
import { fetchDetailComment } from '../../actions/CommentActions';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class CommentDetail extends Component {
  componentWillMount() {
    const { fetchDetailCommentHandler, match } = this.props;
    const commentId = match.params.id;
    CommentsAPI.getDetailComment({id: commentId})
    .then(response => response.json())
    .then((comment) => { fetchDetailCommentHandler(comment)})
  }
  render() {
    const { match, comment } = this.props;
    return(
      <div className="comment-detail-container">
      {/*  <Link to="/">
          <img src="http://www.freepngimg.com/download/arrow/1-2-arrow-png-image.png" alt="arrow"/>
        </Link>*/}
        <h3 className="comment-detail-header">Comment id: {match.params.id}</h3>
        <div className="comment-detail-content">
          <div>Parent id: {comment.parentId}</div>
          <div>Time stamp: {(new Date(comment.timestamp)).toString()}</div>
          <div>Body: {comment.body}</div>
          <div>Author: {comment.author}</div>
          <div>Vote score: {comment.voteScore}</div>
          <div>Deteted: {comment.deleted}</div>
          <div>Parent deleted: {comment.parentDeleted}</div>
        </div>
      </div>

    );
  }
}
const mapStateToProps = state => {
  return {
    comment: state.comment
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDetailCommentHandler: (comment) => {
      dispatch(fetchDetailComment({comment}))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentDetail);