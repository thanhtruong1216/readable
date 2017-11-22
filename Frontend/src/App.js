import React, { Component } from 'react';
import './App.css';
import Categories from './Components/Categories';
import Posts from './Components/Posts';
import Comments from './Components/Comments'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Readable App</h1>
        <Categories/>
        <Posts/>
        <Comments/>
      </div>
    );
  }
}

export default App;
