import React, { Component } from 'react';
import uuid from 'uuid/v4';
import * as PostAPI from '../APIS/PostsAPI';
import { addPost } from '../actions';
import { connect } from 'react-redux';

class FormCreatePost extends Component {
  submitPost = () => {
    const { store, addNewPost } = this.props;
    if(this.title.value === '' || this.author.value === '' || this.body.value === '') {
      alert('Record not accept empty')
      return false;
    }
    const post = {
      id: uuid(),
      title: this.title.value,
      author: this.author.value,
      body: this.body.value,
      category: this.category.value,
      timestamp: Date.now()
    };

    PostAPI.createPost(post).then(response => response.json()).then(json => {addNewPost(post)});

    this.title.value = ''
    this.author.value = ''
    this.body.value = ''

  }
  render() {
    return(
      <form onSubmit={ (e) => { e.preventDefault() } }>
        <div>
          <label>Title:</label>
          <textarea
            type="text" 
            placeholder="Title" 
            ref={(textarea) => this.title = textarea}>
          </textarea>
        </div>

        <div>
          <label>Author:</label>
          <textarea
            type="text"
            placeholder="Author"
            ref={(textarea) => this.author = textarea}>
          </textarea>
        </div>
        <div>
          <label>Body:</label>
          <textarea
            type="text"
            placeholder="Post content"
            ref={(textarea) => this.body = textarea}>
          </textarea>
        </div>

        <div>
          <label>Category</label>
          <select ref={(select) => this.category = select}>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="udacity">Udacity</option>
          </select>
        </div>
        <button onClick={this.submitPost}>Submit</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {}
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
)(FormCreatePost);

  