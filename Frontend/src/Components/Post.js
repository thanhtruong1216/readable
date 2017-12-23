import React, { Component } from 'react';
import { connect } from 'react-redux';
import SaveEditPost from './SaveEditPost';
import * as PostsAPI from '../APIS/PostsAPI';
import * as CommentsAPI from '../APIS/CommentsAPI';
import { deletePost, fetchComments } from '../actions';
import Comments from './Comments';
import CreateComment from './CreateComment';

class Post extends Component {
  state = {
    editPost: false,
    openCommentForm: false
  }

  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments || {}
    }
  }

  componentWillReceiveProps({ comments }) {
    this.setState({comments});
  }

  componentDidMount() {
    const { fetchCommentsHandler, post } = this.props;
    CommentsAPI.getAllComments(post)
      .then(response => response.json())
      .then(comments => {
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
    const { post, comment, postId } = this.props;
    const { comments } = this.state;
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
          <div className="comment-container">
            <CreateComment comment={comment} post={post}/>
            <h2>Comments</h2>
            <Comments comments={comments} postId={post.id} />
          </div>
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
    posts: (state) => state.posts,
    comments: state.comments
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