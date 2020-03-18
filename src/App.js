import React, { Component, Fragment } from 'react';
import AsyncAwait from './components/AsyncAwait';
import './App.css';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Fragment>
      <h1 className='titles'>This App is for code testing</h1>
      <AsyncAwait />
      </Fragment>
    )
  }
}


export default App;
