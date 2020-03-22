import React, { Component, Fragment } from 'react';
import TableCard from './containers/TableCard';
import './App.css';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Fragment>
      <h1 className='titles'>This App is for code testing</h1>
      {/* AsyncAwait Section */}
      <h2 className='titles'>async await</h2>
      <h3 className='titles'>fetching urls and review the data</h3>
      <TableCard />
      </Fragment>
    )
  }
}


export default App;
