import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PostsAPI from '../../APIS/PostsAPI';
import { editPost } from '../../actions/PostActions';

class EditPostBtn extends Component {
  state = {
    openFormEditPostState: false
  }

  handleEditPost= () => {
    this.setState({
      openFormEditPostState: true
    })
  }

  saveEditPost = (e) => {
    e.preventDefault()
    const { post, saveEditPostHandler } = this.props;
    debugger
    const newPost = {
      ...post,
      title: this.title.value,
      body: this.body.value,
      category: this.category.value
    };
    PostsAPI.editPost(newPost).then((response) => {
      saveEditPostHandler(newPost);
      this.setState({
        openFormEditPostState: !this.state.openFormEditPostState
      })
    })
  }

  cancelEditPost = (e) => {
    e.preventDefault()
    this.setState({
      openFormEditPostState: !this.state.openFormEditPostState
    })
  }
  render() {
    const { post } = this.props;
    if(!this.state.openFormEditPostState) {
      return(
        <button className="btn" onClick={this.handleEditPost}>edit post</button>
      );
    } else {
      return(
        <div className="form-container">
          <h3>refactor existing post</h3>
          <form onSubmit={ (e) => { e.preventDefault() } }>
            <h4>edit your post</h4>
            <div>
              <input type="text" defaultValue={post.title} ref={ (input) => this.title = input }/>
              <textarea defaultValue={post.body} type="text" ref={ (textarea) => this.body = textarea }> 
              </textarea>
              <div>
                <label className="category-label">Category</label>
                <select defaultValue={post.category} ref={ (select => this.category = select) }>
                  <option value="react">react</option>
                  <option value="redux">redux</option>
                  <option value="udacity">udacity</option>
                </select>
              </div>
              <button className="btn-save-edit-post" onClick={this.saveEditPost}>save</button>
              <button className="btn-cancel-edit-post" onClick={this.cancelEditPost}>cancel</button>
            </div>
          </form>
      </div>
      );
    }
  }
}
const mapDispatchToProps = dispatch => {
  return {
    saveEditPostHandler: (post) => {
      dispatch(editPost({post}));
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(EditPostBtn);