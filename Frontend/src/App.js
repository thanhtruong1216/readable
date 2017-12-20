import React, { Component } from 'react';
import './App.css';
import Categories from './Components/Categories';
import Posts from './Components/Posts';
import * as PostsAPI from './APIS/PostsAPI';
import { fetchPost } from  './actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCategories, fetchComments } from './actions';
import CreatePost from './Components/CreatePost';

class App extends Component {
  componentDidMount() {
    const { fetchCategoriesHandler, fetchPostHandler, fetchCommentsHandler } = this.props;

    PostsAPI.getAll().then(response => response.json()).then(posts => {
      fetchPostHandler(posts);
    })

    PostsAPI.getAllCategories().then(response => response.json()).then(json => {
      fetchCategoriesHandler(json.categories);
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Readable App</h1>
        <CreatePost/>
        <Categories/>
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
      dispatch(fetchPost({ posts }));
    },
    fetchCategoriesHandler: (categories) => {
      dispatch(fetchCategories({ categories }));
    }
  }
}
// App.propTypes = {
//   store: PropTypes.object.isRequired,
// }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);