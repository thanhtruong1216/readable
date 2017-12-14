import React, { Component } from 'react';
import './App.css';
import Categories from './Components/Categories';
import Posts from './Components/Posts';
import Comments from './Components/Comments';
import * as PostsAPI from './APIS/PostsAPI';
import { fetchPost } from  './actions';

class App extends Component {
  state = {
    posts: [],
    comments: []
  }
  componentDidMount() {
    const { store } = this.props;
    PostsAPI.getAll().then(response => response.json()).then(posts => {
      store.dispatch(fetchPost({posts}));
    })
  }
  render() {
    const { store } = this.props;
    const { posts } = this.state;

    return (
      <div className="App">
        <h1>Readable App</h1>
        <Categories/>
        <Posts store={store} posts={posts}/>
      </div>
    );
  }
}

export default App;
