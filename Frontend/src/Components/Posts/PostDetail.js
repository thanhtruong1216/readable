import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchDetailsPost } from '../../actions/PostActions';
import * as PostAPI from '../../APIS/PostsAPI';
import * as PostsAPI from '../../APIS/PostsAPI';
import { voteUpPost, voteDownPost } from '../../actions/PostActions';
import BasicTabs from '../Categories/CategoryTab';
import EditPostBtn from '../Buttons/EditPostBtn';
import DeletePostBtn from '../Buttons/DeletePostBtn';
import CreatePost from '../Buttons/CreatePost';
import ShowCommentsBtn from '../Buttons/ShowCommentsBtn';
import CreateCommentBtn from '../Buttons/CreateCommentBtn';

class PostDetail extends Component {
  state = {
    toggleCommentState: false,
    openCommentForm: false
  }

  componentWillMount() {
    const { PostDetailHandler, match } = this.props;
    const postId = match.params.id;
    PostAPI.getDetailPost({id: postId})
      .then(response => {
        return response.json()
      })
      .then(post => { 
        if(post && post.id) {
          PostDetailHandler(post)
        } else {
          window.location.href = '/pagenotfound'
        }
      });
  }

  handleVoteUpPost = (event) => {
    event.preventDefault()
    const { voteUpPostHandler, post } = this.props;
    PostsAPI.voteUp(post).then((response) => { voteUpPostHandler(post) })
  }

  handleVoteDownPost = (event) => {
    event.preventDefault()
    const { voteDownPostHandler, post } = this.props;
    PostsAPI.voteDown(post).then((response) => { voteDownPostHandler(post) })
  }

  render() {
    const { match, post, comments } = this.props;
    return(
      <div className="post-detail-container">
        <BasicTabs />
        <h3 className="post-detail-header">Post id: {match.params.id} </h3>
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
              <div className="post-title">{ post.title }</div>
              <div>{post.body}</div>
              <small>Created by <strong>{post.author}</strong> at {(new Date(post.timestamp)).toLocaleString()}</small>
            </div>
          </div>
        </div>
        </div>
        <div className="add-show-comment-container">
          <CreateCommentBtn post={post}/>
          <ShowCommentsBtn comments={comments} post={post}/>
        </div>
        <div className="post-detail-actions">
          <DeletePostBtn post={post}/>
          <EditPostBtn post={post}/>
        </div>
        <CreatePost />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts,
    post: state.post,
    comments: state.comments
  }
}
const mapDispatchToProps = dispatch => {
  return {
    PostDetailHandler: (post) => {
      dispatch(fetchDetailsPost({post}))
    },
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
)(PostDetail);

