import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from '../Posts/Posts';
import CreatePost from '../Buttons/CreatePost';
import BasicTabs from './CategoryTab';

class CategoryPage extends Component {
  render() {
    const { match, posts } = this.props;
    const category = match.params.category;
    const categoryPosts = posts.filter((post) => post.category === category )
    return(
      <div className="category-page-container">
        <BasicTabs/>
        <h3 className="category-name">{ match.params.category } category</h3>
        <Posts posts={categoryPosts}/>
        <CreatePost />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(
  mapStateToProps
)(CategoryPage);

