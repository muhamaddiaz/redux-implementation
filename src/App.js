import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

import MainPage from './components/presentations/MainPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
      
    );
  }
}

export default App;
