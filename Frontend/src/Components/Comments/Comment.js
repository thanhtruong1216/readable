import React, { Component } from 'react';
import * as CommentsAPI from '../../APIS/CommentsAPI';
import { connect } from 'react-redux';
import { deleteComment, editComment, voteUp, voteDown } from '../../actions/CommentActions';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

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

  saveEditComment = (e) => {
    e.preventDefault()
    const { comment, saveEditCommentHandler } = this.props;
    const newComment = {
      ...comment,
      author: this.author.value,
      body: this.body.value
    }
     CommentsAPI.editComment(newComment).then((response) => {
      saveEditCommentHandler(newComment);
      this.setState(({openEditCommentForm}) => ({openEditCommentForm: !openEditCommentForm}));
    })
  }
  
  voteUpComment = (event) => {
    const { voteUpCommentHandler, comment } = this.props;
    CommentsAPI.voteUp(comment).then((response) => { voteUpCommentHandler(comment)})
  }

  voteDownComment = (event) => {
    const { voteDownCommentHandler, comment } = this.props;
    CommentsAPI.voteDown(comment).then((response) => { voteDownCommentHandler(comment)})
  }

  render() {
    const { comment } = this.props;
    const commentId = `/comment/${comment.id}`
    const commentDetailLink = `/comment/${comment.id}`
    if(!this.state.openEditCommentForm) {
      return(
        <div className="container">
          <div className="comment-content">
            <div className="vote-score">
              <div onClick={ this.voteUpComment }>
                <img src="http://www.fractal-explorer.com/pictures/sierpinskiTri/SierpinskiTri0.jpg" alt="triangle_up"/>
              </div>
              <div className="vote-score-result">{ comment.voteScore }</div>
              <div onClick={ this.voteDownComment }>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Black_triangle.svg/1200px-Black_triangle.svg.png" alt="triangel_down"/>
              </div>
            </div>

            <div>
              <div>Created by <b>{ comment.author }</b> at { (new Date(comment.timestamp)).toString() }</div>
              <div>Comment content: { comment.body }</div>
            </div>
          </div>
          <div>
            <Link className="link" to={commentDetailLink}>detail</Link>
            <button onClick={ this.deleteComment }>Delete</button>
            <button onClick={ this.editComment }>Edit</button>
          </div>
        </div>
      );
    } else {
      return(
        <form onSubmit={ this.saveEditComment }>
          <input name="author" defaultValue={ comment.author } ref={ (input) => this.author = input } />
          <textarea name="body" defaultValue={ comment.body } ref={ (textarea) => this.body = textarea }>
          </textarea>
          <button>Save</button>
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
      dispatch(editComment({ comment }))
    }, 
    voteUpCommentHandler: (comment) => {
      dispatch(voteUp({ comment }))
    },
    voteDownCommentHandler: (comment) => {
      dispatch(voteDown({ comment }))
    }
  }
}

Comment.proptypes = {
 comment: Proptypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);