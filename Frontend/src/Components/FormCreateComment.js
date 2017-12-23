import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import * as CommentstAPI from '../APIS/CommentsAPI';
import { addComment } from '../actions';

class FormCreateComment extends Component {
  submitComment = () => {
    const { addNewComment, post, postId, comments} = this.props;
    console.log("Post Idd", postId);
    const comment = {
      id: uuid(),
      author: this.author.value,
      body: this.body.value,
      parentId: post.id,
      timestamp: Date.now()
    }

    CommentstAPI.createComment(comment)
      .then(response => response.json())
      .then(() => {
        addNewComment({comment})
      });

    this.author.value = ''
    this.body.value = ''
  }
  render() {
    return(
      <form onSubmit={ (e) => {e.preventDefault()} }>
        <textarea 
          placeholder="author" 
          ref={ (textarea) => this.author = textarea }>
        </textarea>
        <textarea 
          placeholder="body"
          ref={ (textarea) => this.body = textarea }>
        </textarea>
        <button onClick={ this.submitComment }>Submit</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = dispatch => {
  return {
    addNewComment: (comment) => {
      dispatch(addComment(comment));
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCreateComment);
