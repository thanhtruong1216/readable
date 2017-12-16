import React, { Component } from 'react';
import * as PostAPI from '../APIS/PostsAPI';
import { editPost } from '../actions';

class EditPost extends Component {
  saveEditPost = () => {
    const { post, toggleEdit } = this.props;

    const newPost = {
      ...post,
      title: this.title.value,
      body: this.body.value,
    };

    PostAPI.editPost(newPost).then((response) => {
      this.props.store.dispatch(editPost(newPost));
      toggleEdit();
    })
  }

  render() {
    const { post, toggleEdit } = this.props;
    return(
      <form onSubmit={(e) => { e.preventDefault() } }>
        <div>
          <label htmlFor={`title-${post.id}`}>Title: </label>
          <input 
            id={`title-${post.id}`}
            type="text"
            defaultValue={post.title}
            ref={(input) => this.title = input}
          />
        </div>
        <div>
          <label htmlFor={`body-${post.body}`}>Body: </label>
          <input 
            id={`body-${post.body}`}
            type="text"
            defaultValue={post.body} 
            ref={(input) => this.body = input}
          />
        </div>
        <button onClick={() => this.saveEditPost()}>Save</button>
        <button onClick={toggleEdit}>Cancel</button>
      </form>
    );
  }
}

export default EditPost;
