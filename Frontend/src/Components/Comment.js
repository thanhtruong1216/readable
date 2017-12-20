import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { comment } = this.props;
    return(
      <div>
        <h2>Comment</h2>
        <div>{comment.id}</div>
        <div>{comment.parentId}</div>
        <div>{comment.timestamp}</div>
        <div>{comment.author}</div>
        <div>{comment.body}</div>
        <div>{comment.voteScore}</div>
        <div>{comment.delected}</div>
        <div>{comment.parentDeleted}</div>
      </div>
    );
  }
}
export default Comment;