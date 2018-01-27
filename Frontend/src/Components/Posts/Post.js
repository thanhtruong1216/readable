import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PostsAPI from '../../APIS/PostsAPI';
import { voteUpPost, voteDownPost } from '../../actions/PostActions';
import { Link } from 'react-router-dom';
import EditPostBtn from '../Buttons/EditPostBtn';
import DeletePostBtn from '../Buttons/DeletePostBtn';
import CreateCommentBtn from '../Buttons/CreateCommentBtn';
import ShowCommentsBtn from '../Buttons/ShowCommentsBtn';

class Post extends Component {
  state = {
    editPost: false,
    showDetailsPost: false,
  }

  handleVoteUpPost = (e) => {
    const { voteUpPostHandler, post } = this.props;
    PostsAPI.voteUp(post).then((response) => { voteUpPostHandler(post) })
  }

  handleVoteDownPost = (e) => {
    const { voteDownPostHandler, post } = this.props;
    PostsAPI.voteDown(post).then((response) => { voteDownPostHandler(post) })
  }

  render() {
    const { post, comments } = this.props;
    const postDetailLink = `/category/${post.category}/${post.id}`
    return(
      <div className="post-container" >
        <div className="post-actions-container">
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
              <div className="post-main-contents">
                <div className="post-title">{post.title}</div>
                <div className="post-content">{post.body}</div>
                <small>Created by <strong>{post.author}</strong> at {(new Date(post.timestamp)).toLocaleString()}</small>
              </div>
            </div>
            </div>
        </div>
        <div className="add-show-comment-container">
          <CreateCommentBtn post={post}/>
          <ShowCommentsBtn comments={comments} post={post}/>
        </div>
        <div className="post-actions">
          <Link className="link" to={postDetailLink}>post detail</Link>
          <DeletePostBtn post={post}/>
          <EditPostBtn post={post}/>
        </div>
      </div>
    );
  }
}
  const mapStateToProps = state => {
    return {
      comments: state.comments,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      voteUpPostHandler: (post) => {
        dispatch(voteUpPost(post))
      },
      voteDownPostHandler: (post) => {
        dispatch(voteDownPost(post))
      },
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);