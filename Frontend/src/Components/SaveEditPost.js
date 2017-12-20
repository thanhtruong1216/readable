import React, { Component } from 'react';
import * as PostAPI from '../APIS/PostsAPI';
import { editPost } from '../actions';
import './SaveEditPost.css';
import { connect } from 'react-redux';

class SaveEditPost extends Component {
  saveEditPost = () => {
    const { post, toggleEdit, saveEditPost } = this.props;

    const newPost = {
      ...post,
      title: this.title.value,
      body: this.body.value,
      category: this.category.value
    };

    PostAPI.editPost(newPost).then((response) => {
      saveEditPost(newPost);
      toggleEdit();
    })
  }

  render() {
    const { post, toggleEdit } = this.props;
    return(
      <form onSubmit={(e) => { e.preventDefault() } }>
        <div>
          <label htmlFor={`title-${post.id}`}>Title: </label>
          <textarea
            id={`title-${post.id}`}
            type="text"
            defaultValue={post.title}
            ref={(textarea) => this.title = textarea}>
          </textarea>
        </div>

        <div>
          <label htmlFor={`body-${post.body}`}>Body: </label>
          <textarea
            id={`body-${post.body}`}
            type="text"
            defaultValue={post.body} 
            ref={(textarea) => this.body = textarea}>
          </textarea>
        </div>

        <div>
          <label htmlFor={`category-${post.category}`}>Category: </label>
          <select 
            id={`category-${post.category}`} 
            defaultValue={post.category} 
            ref={(select => this.category = select)}>
            <option value="react">react</option>
            <option value="redux">redux</option>
            <option value="udacity">udacity</option>
          </select>
        </div>

        <button onClick={() => this.saveEditPost()}>Save</button>
        <button onClick={toggleEdit}>Cancel</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    saveEditPost: (newPost) => {
      dispatch(editPost(newPost));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveEditPost);
