import React, { Component } from 'react';
import * as PostsAPI from '../../APIS/PostsAPI';
import { deletePost } from '../../actions/PostActions';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class DeletePostBtn extends Component {
  handleDeletePost = (e) => {
    const { deletePostHandler, post } = this.props;
    PostsAPI.removePost(post).then((response) => { deletePostHandler(post) });
  }
  render() {
    return(
      <button className="btn" onClick={this.handleDeletePost}>delete post</button>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePostHandler: ({id}) => {
      dispatch(deletePost({id}))
      dispatch(push('/'))
    },
  }
}

export default connect(
  null,
  mapDispatchToProps
)(DeletePostBtn);
