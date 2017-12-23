import React, { Component } from 'react';
import FormCreateComment from './FormCreateComment';

class CreateComment extends Component {
  state = {
    openCommentForm: false
  }
  toggleCommentForm = () => {
    this.setState({
      openCommentForm: !this.state.openCommentForm
    })
  }
  render() {
    let commentButtonText = "Comment";
    let createCommentForm = null;
    const { post } = this.props;
    if(this.state.openCommentForm) { 
      createCommentForm = <FormCreateComment post={post}/>
      commentButtonText = "Discard"
    }
    return(
      <div>
        <button onClick={ this.toggleCommentForm }>{ commentButtonText }</button>
        { createCommentForm }
      </div>
    );
  }
}

export default CreateComment; 
