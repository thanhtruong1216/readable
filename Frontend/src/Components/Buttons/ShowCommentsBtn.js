import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CommentsAPI from '../../APIS/CommentsAPI';
import { fetchComments } from '../../actions/CommentActions';
import Comments from '../Comments/Comments';

class ShowCommentsBtn extends Component {
  state = {
    showComments: false
  }

  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments || {},
    }
  }

  componentWillReceiveProps({ comments }) {
    this.setState({comments});
  }

  componentDidMount() {
    const { fetchCommentsHandler, post} = this.props;
    CommentsAPI.getAllComments(post)
      .then(response => response.json())
      .then(comments => {
        fetchCommentsHandler({comments, postId: post.id});
    })
  }

  handleShowComments = () => {
    this.setState({
      showComments: !this.state.showComments
    })
  }

  handleHideComments = () => {
    this.setState({
      showComments: false
    })
  }
  render() {
    const {post, comments} = this.props;
    const { showComments } = this.state;

    let commentText = '';

    const commentsCount = (comments[post.id] || []).length

    if(commentsCount === 0) {
      commentText = "no comment"
    } else if(showComments) {
      commentText = "hide comments"
    } else if(commentsCount === 1) {
      commentText = `show 1 comment`
    } else {
      commentText = `show ${commentsCount} comments`
    }

    return(
      <div className="comments">
        <button className="btn show-cmt-btn" onClick={this.handleShowComments}>{commentText}</button>
        {showComments && <Comments className="comments-container" comments={comments} postId={post.id} />}
      </div>
    );    
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
    // post: state.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCommentsHandler: (comments) => {
      dispatch(fetchComments(comments))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCommentsBtn);