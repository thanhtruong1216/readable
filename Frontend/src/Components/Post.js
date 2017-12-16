import React, { Component } from 'react';
import EditPost from './EditPost';
import * as PostAPI from '../APIS/PostsAPI';
import { deletePost } from '../actions';
class Post extends Component {
  state = {
    editPost: false
  }

  removePost = (post) => {
    PostAPI.removePost(post).then((response) => {
      this.props.store.dispatch(deletePost(post))
    });
  }

  editPost = () => {
    this.setState({
      editPost: true
    })
  }

  stopEditPost = () => {
    this.setState({
      editPost: false
    })
  }

  render() {
    const post = this.props.xpost;
    const { store } = this.props;

    if(!this.state.editPost) {
      return(
        <div>
          <div className="posts-container" >
            <div className="title-author-container">
              <div className='title'><b>Title: </b>{post.title}</div>
              <div className='author'><b>Author: </b>{post.author}</div>
            </div>
            <div><b>Body: </b>{post.body}</div>
            <div><b>Category: </b>{post.category}</div>
            <div><b>Timestamp: </b>{(new Date(post.timestamp)).toString()}</div>
            <div><b>Vote score: </b>Undefined</div>
          </div>
          <button onClick={() => this.removePost(post)}>Delete post</button>
          <button onClick={() => this.editPost()}>Edit post</button>
        </div>
      );
    } else {
      return(
        <EditPost post={post} store={store} toggleEdit={this.stopEditPost} />
      );
    } 
  }
}
export default Post;