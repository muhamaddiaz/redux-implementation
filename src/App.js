import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Posts from './components/Posts'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Posts />
      </BrowserRouter>
    );
  }
}

export default App;
