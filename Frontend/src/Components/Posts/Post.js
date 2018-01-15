import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PostsAPI from '../../APIS/PostsAPI';
import * as CommentsAPI from '../../APIS/CommentsAPI';
import { deletePost, voteUpPost, voteDownPost, editPost } from '../../actions/PostActions';
import { fetchComments, addComment } from '../../actions/CommentActions'
import Comments from '../Comments/Comments';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';
import serializeForm from 'form-serialize';

class Post extends Component {
  state = {
    editPost: false,
    openCommentForm: false,
    showDetailsPost: false,
    toggleCommentState: false
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

  toggleCommentForm = () => {
    this.setState({
      openCommentForm: !this.state.openCommentForm
    })
  }

  handleVoteUpPost = (event) => {
    const { voteUpPostHandler, post } = this.props;
    PostsAPI.voteUp(post).then((response) => { voteUpPostHandler(post) })
  }

  handleVoteDownPost = (event) => {
    const { voteDownPostHandler, post } = this.props;
    PostsAPI.voteDown(post).then((response) => { voteDownPostHandler(post) })
  }

  submitComment = (e) => {
    e.preventDefault()
    const { addNewComment, post } = this.props;
    const comment = {
      ...serializeForm(e.target, { hash: true }),
      id: uuid(),
      timestamp: Date.now(),
      parentId: post.id,
    }

    CommentsAPI.createComment(comment)
      .then(response => response.json())
      .then(() => {
        addNewComment({comment})
        this.form.reset()
        this.setState({
          openCommentForm: !this.state.openCommentForm
        })
      });
  }
  cancelComment = (e) => {
    e.preventDefault()
    this.setState({
      openCommentForm: !this.state.openCommentForm
    })
  }

   saveEditPost = (e) => {
    e.preventDefault()
    const { post, saveEditPost } = this.props;
    const newPost = {
      ...post,
      title: this.title.value,
      body: this.body.value,
      category: this.category.value
    };

    PostsAPI.editPost(newPost).then((response) => {
      saveEditPost(newPost);
      this.setState({
        editPost: !this.state.editPost
      })
    })
  }

  cancelEditPost = (e) => {
    e.preventDefault()
    this.setState({
      editPost: !this.state.editPost
    })
    
  }

  toggleComment = (e) => {
    e.preventDefault()
    this.setState({
      toggleCommentState: !this.state.toggleCommentState
    })
  }

  
  render() {
    const { post } = this.props;
    const { comments } = this.state;
    const postDetailLink = `/category/${post.category}/${post.id}`
    let createCommentForm = null;
    let commentNodes = null;
    let toggleCommentButtonText = "Add comment"
    let showCommentuttonText = "Show comment"
    if(this.state.toggleCommentState) {
      commentNodes = <Comments className="comments" comments={ comments } postId={ post.id }/>
      showCommentuttonText= "Hide Comment"
      if(post.commentCount === 0) {
        showCommentuttonText = "No comment to show"
      }
    }
    if(this.state.openCommentForm) { 
      createCommentForm = (
        <div className="comment-form-container">
         <div className="form-container">
            <h3>JOIN THE DISCUSSION</h3>
            <form onSubmit={ this.submitComment } ref={ (form) => this.form = form }>
              <h4>NEW COMMENT</h4>
              <div>
                <input name="author" type="text" placeholder="Author" />
                <textarea name="body" type="text" placeholder="Content"></textarea>
                <button>submit</button>
                <button onClick={this.cancelComment}>cancel</button>
              </div>
            </form>
          </div>
        </div>
      )
      toggleCommentButtonText = ""
    }
    if(!this.state.editPost) { 
      return(
        <div className="post-container" >
          <h4>post</h4>
          <div className="group">
            <div className='title'>
              <div className="vote-score">
                <div onClick={ this.handleVoteUpPost }>
                  <img 
                    src="http://www.fractal-explorer.com/pictures/sierpinskiTri/SierpinskiTri0.jpg" 
                    alt="triangle_up"/>
                </div>
                <div className="vote-score-result">{post.voteScore}</div>
                <div onClick={ this.handleVoteDownPost }>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Black_triangle.svg/1200px-Black_triangle.svg.png" 
                    alt="triangel_down"/>
                </div>
              </div>
              <div>
              <div>{ post.title }</div>
              <div>Created by {post.author} at {(new Date(post.timestamp)).toString()}</div>
              </div>
            </div>
            <div className='actions'>
              <Link className="link" to={postDetailLink}>Detail</Link>
              <button onClick={() => this.removePost(post)}>Delete</button>
              <button onClick={() => this.editPost()}>Edit</button>
            </div>
          </div>
          <div className="content">Content: {post.body}</div>
          <div className="comment-container">
            <div>
              <button className="btn" onClick={this.toggleCommentForm}>{toggleCommentButtonText}</button>
              {createCommentForm}
            </div>
            <div>
              <button className="btn show-comment-button" onClick={this.toggleComment}>{showCommentuttonText}</button>
               {commentNodes}
            </div>
          </div>
        </div>  
      );
    } else {
      return(
        <div className="form-container">
          <h3>refactor existing post</h3>
          <form onSubmit={ (e) => { e.preventDefault() } }>
            <h4>edit your post</h4>
            <div>
              <input type="text" defaultValue={ post.title } ref={ (input) => this.title = input }/>
              <textarea type="text" defaultValue={ post.body } ref={ (textarea) => this.body = textarea }> 
              </textarea>
              <div>
                <label className="category-label">Category</label>
                <select defaultValue={ post.category } ref={ (select => this.category = select) }>
                  <option value="react">react</option>
                  <option value="redux">redux</option>
                  <option value="udacity">udacity</option>
                </select>
              </div>
              <button className="btn-save-edit-post" onClick={this.saveEditPost}>Save</button>
              <button className="btn-cancel-edit-post" onClick={this.cancelEditPost}>cancel</button>
            </div>
          </form>
      </div>
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
      },
      voteUpPostHandler: (post) => {
        dispatch(voteUpPost(post))
      },
      voteDownPostHandler: (post) => {
        dispatch(voteDownPost(post))
      },
      addNewComment: (comment) => {
      dispatch(addComment(comment));
      },
      saveEditPost: (newPost) => {
      dispatch(editPost(newPost));
      }
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);