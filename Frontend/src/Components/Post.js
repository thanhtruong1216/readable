import React, { Component } from 'react';
import { connect } from 'react-redux';
import SaveEditPost from './SaveEditPost';
import * as PostsAPI from '../APIS/PostsAPI';
import { deletePost, fetchComments } from '../actions';
import Comments from './Comments';

class Post extends Component {
  state = {
    editPost: false
  }

  componentDidMount() {
    const { fetchCommentsHandler, post } = this.props;
    PostsAPI.getAllComments(post).then(response => response.json()).then(comments => {
      fetchCommentsHandler({comments, postId: post.id});
    })
  }

  editPost = () => {
    this.setState({
      editPost: true
    })
  }

  removePost = (post) => {
    const { deletePostHandler } = this.props;
    PostsAPI.removePost(post).then((response) => { deletePostHandler(post) });
  }

  stopEditPost = () => { this.setState({
      editPost: false
    })
  }

  render() {
    const { post, comment, comments, postId } = this.props;
    if(!this.state.editPost) {
      return(
        <div>
          <div className="posts-container" >
            <div className="title-author-container">
              <div className='title'><b>Title: </b>{post.title}</div>
              <div className='author'><b>Author: </b>{post.author}</div>
            </div>
            <div>Body: {post.body}</div>
            <div>Category: {post.category}</div>
            <div>Timestamp: {(new Date(post.timestamp)).toString()}</div>
            <div>Vote score: {post.voteScore}</div>
          </div>
          <button onClick={() => this.removePost(post)}>Delete post</button>
          <button onClick={() => this.editPost()}>Edit post</button>
          <Comments comment={comment} postId={post.id}/>
        </div>  
      );
    } else {
      return(
        <SaveEditPost post={post} toggleEdit={this.stopEditPost} />
      );
    } 
  }
}

const mapStateToProps = state => {
  return {
    posts: (state) => state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePostHandler: (post) => {
      dispatch(deletePost(post))
    },
    fetchCommentsHandler: (comments) => {
      dispatch(fetchComments(comments))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);