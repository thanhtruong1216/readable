import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CommentsAPI from '../../APIS/CommentsAPI';
import { addComment } from '../../actions/CommentActions';
import uuid from 'uuid/v4';
import serializeForm from 'form-serialize';

class CreateCommentBtn extends Component {
  state = {
    openCommentForm: false
  }
  handleCreateComment = () => {
    this.setState({
      openCommentForm: true
    })
  }
  submitComment = (e) => {
    e.preventDefault()
    const { addNewComment, post } = this.props;
    const comment = {
      ...serializeForm(e.target, { hash: true }),
      id: uuid(),
      timestamp: Date.now(),
      parentId: post.id,
      voteScore: 0
    }

    CommentsAPI.createComment(comment)
      .then(response => response.json())
      .then(() => {
        addNewComment(comment)
        this.form.reset()
        this.setState({
          openCommentForm: !this.state.openCommentForm
        })
      });
  }
  cancelComment = (e) => {
    e.preventDefault()
    this.setState({
      openCommentForm: !this.state.openCommentForm
    })
  }

  render() {
    if(!this.state.openCommentForm) {
      return(
        <button className="button btn" onClick={this.handleCreateComment}>add comment</button>
      );
    } else {
      return(
        <div className="comment-form-container">
         <div className="form-container">
            <h3>JOIN THE DISCUSSION</h3>
            <form onSubmit={ this.submitComment } ref={ (form) => this.form = form }>
              <h4>NEW COMMENT</h4>
              <div>
                <input name="author" type="text" placeholder="Author" />
                <textarea name="body" type="text" placeholder="Content"></textarea>
                <button>submit</button>
                <button onClick={this.cancelComment}>cancel</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewComment: (comment) => {
      dispatch(addComment({comment}));
    },
  }
}

export default connect(
 null,
  mapDispatchToProps
)(CreateCommentBtn);