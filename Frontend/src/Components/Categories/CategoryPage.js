import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from '../Posts/Posts';
import { Link } from 'react-router-dom';

class CategoryPage extends Component {
  render() {
    const { match, posts } = this.props;
    const category = match.params.category;
    const categoryPosts = posts.filter((post) => post.category === category )
    return(
      <div className="category-page-container">
        {/*<Link to='/'>
          <img src="http://www.freepngimg.com/download/arrow/1-2-arrow-png-image.png" alt="arrow"/>
        </Link>*/}
        <h3 className="category-name">{ match.params.category } category</h3>
        <Posts posts={categoryPosts}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPage);

