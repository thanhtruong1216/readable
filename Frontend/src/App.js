import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PostsAPI from './APIS/PostsAPI';
import * as CategoriesAPI from './APIS/CategoriesAPI';
import { fetchPosts, fetchCategoryPosts } from  './actions/PostActions';
import { fetchCategoriesExisting } from './actions/CategoryActions';
import Categories from './Components/Categories/Categories';
import './App.css';
import CreatePost from './Components/Buttons/CreatePost';
import BasicTabs from './Components/Categories/CategoryTab';

class App extends Component {
  componentDidMount() {
    const { fetchCategoryPostsHandler, fetchPostHandler, fetchCategoriesExistingHandler } = this.props;

    PostsAPI.getAll()
      .then(response => response.json())
      .then(posts => {
        fetchPostHandler(posts);
      });

    CategoriesAPI.getAllCategories()
      .then(response => response.json())
      .then(json => {
        fetchCategoriesExistingHandler(json.categories);
      });

    CategoriesAPI.getCategoryPosts()
      .then(response => response.json())
      .then(posts => {
        fetchCategoryPostsHandler(posts);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>READABLE APP</h1>
        <div>
          <BasicTabs />
          <CreatePost />
          <Categories/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPostHandler: (posts) => {
      dispatch(fetchPosts({ posts }));
    },
    fetchCategoriesExistingHandler: (categories) => {
      dispatch(fetchCategoriesExisting({ categories }))
    },
    fetchCategoryPostsHandler: (posts) => {
      dispatch(fetchCategoryPosts({ posts }));
    }
  }
}

App.propTypes = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);