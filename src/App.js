import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import './App.css';
import Grid from './components/Grid';
import reducer from './reducers'

let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Grid />
      </Provider>
    );
  }
}

export default App;
