import React, { Component } from 'react';
import './App.css';
import Categories from './Components/Categories';
import Posts from './Components/Posts';
import Comments from './Components/Comments'

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <div className="App">
        <h1>Readable App</h1>
        <Categories/>
        <div>
          <h3>Create a post</h3>
          <Posts store={store}/>
        </div>
      </div>
    );
  }
}

export default App;
