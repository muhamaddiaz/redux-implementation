import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Posts from './components/containers/PostsContainer'
import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Posts />
        </BrowserRouter>
      </Provider>
      
    );
  }
}

export default App;
