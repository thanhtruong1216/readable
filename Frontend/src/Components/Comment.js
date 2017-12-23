import React, { Component } from 'react';
import './Comment.css';
import * as CommentsAPI from '../APIS/CommentsAPI';
import { connect } from 'react-redux';
import { deleteComment, editComment } from '../actions';

class Comment extends Component {
  state = {
    openEditCommentForm: false
  }

  editComment = () => {
    this.setState({
      openEditCommentForm: !this.state.openEditCommentForm
    })
  }

  deleteComment = () => {
    const { comment, deleteCommentHandler } = this.props;
    CommentsAPI.removeComment(comment)
      .then((response) => { deleteCommentHandler(comment) });
  }

  saveEditComment = () => {
    const { comment, saveEditCommentHandler } = this.props;
    const newComment = {
      ...comment,
      author: this.author.value,
      body: this.body.value
    }
     CommentsAPI.editComment(newComment).then((response) => {
      saveEditCommentHandler(newComment);
    })
  }
  render() {
    const { comment } = this.props;
    if(!this.state.openEditCommentForm) {
      return(
        <div className="comment-container">
          <div>Id:{ comment.id }</div>
          <div>ParentId: { comment.parentId }</div>
          <div>Timestamp: { (new Date(comment.timestamp)).toString() }</div>
          <div>Author: { comment.author }</div>
          <div>Body: { comment.body }</div>
          <div>VoteScore: { comment.voteScore }</div>
          <div>Delected: { comment.delected }</div>
          <div>ParentIdDeleted: { comment.parentDeleted }</div>
          <button onClick={ this.deleteComment }>Delete CMT</button>
          <button onClick={ this.editComment }>Edit CMT</button>
          <button>Comment</button>
        </div>
      );
    } else {
      return(
        <form>
          <textarea 
            defaultValue={ this.props.author }
            ref={(textarea) => this.author = textarea}>
          </textarea>
          <textarea 
            defaultValue={ this.props.body }
            ref={(textarea) => this.body = textarea }>
          </textarea>
          <button onClick={this.saveEditComment}>Save</button>
        </form>
      );
    }  
  }
}
const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCommentHandler: (comment) => {
      dispatch(deleteComment({comment}))
    },
    saveEditCommentHandler: (comment) => {
      dispatch(editComment({comment}))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);