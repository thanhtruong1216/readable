import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import uuid from 'uuid/v4';
import * as PostAPI from '../../APIS/PostsAPI';
import { addPost } from '../../actions/PostActions';
import { connect } from 'react-redux';

class CreatePost extends Component {
  state = {
    openCreatePostForm: false
  }
  toggleCreatePostForm = () => {
    this.setState({
      openCreatePostForm: !this.state.openCreatePostForm
    })
  }

  submitPost = (e) => {
    e.preventDefault() 
    const { addNewPost } = this.props;
    const post = { 
      ...serializeForm(e.target, { hash: true }),
      id: uuid(),
      voteScore: 0,
      timestamp: Date.now()
    }
    if(post.author === "") {
      alert("no")
      return false
    }
    PostAPI.createPost(post)
      .then(response => response.json())
      .then(json => {
        addNewPost(post)
        this.form.reset()
        this.setState({
          openCreatePostForm: !this.state.openCreatePostForm
        });
      });
  }
  cancelCreatePost = (e) => {
    e.preventDefault()
    this.setState({
      openCreatePostForm: !this.state.openCreatePostForm
    })
  }
  render() {
    let createPostForm = null;
    const { categories } = this.props;
    let addPostButtonText = "add post";
    if(this.state.openCreatePostForm) {
      createPostForm = (
        <div className="form-container">
          <h3>let create a post</h3>
          <form onSubmit={ this.submitPost } ref={(form) => this.form = form} >
            <div>
              <h4 className="create-post-header">new post</h4>
                <input name="title" type="text" placeholder="Title" />
                <input name="author" type="text" placeholder="Author" />
                <textarea name="body" type="text" placeholder="Post content" ></textarea>
              <div>
                <label>Category</label>
                <select name="category">
                  { categories.map((category, index) =>
                    <option key={index} value={category.name}>{category.name}</option>)
                  }
                </select>
              </div>
              <button className="btn btn-submit-post">submit post</button>
              <button onClick={this.cancelCreatePost}>Cancel</button>
            </div>
          </form>
        </div> 
      )
      addPostButtonText=""
    }
    
    return(
      <div className="create-post-container">
        <button className="btn btn-add-post" onClick={this.toggleCreatePostForm}>{addPostButtonText}</button>
        <div>{ createPostForm }</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewPost: (post) => {
      dispatch(addPost(post));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);

  