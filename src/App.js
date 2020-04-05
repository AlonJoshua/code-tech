import React, { Component, Fragment } from 'react';
import TableCard from './containers/TableCard';
import './App.css';

class App extends Component {
  constructor() {
    super()
    console.log('constructor');
      this.state = {
      students: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
    };
  }

  componentDidMount() {
    console.log('componentDidMout');
    this.fetchData();
  }

  fetchData = async function () {
    const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
    ]
      try {
      const requestArray = []
      const arrayOfPromises = await urls.map(url => fetch(url))
      for await (let request of arrayOfPromises) {
        const data = await request.json();
        const newArray = await requestArray.push(data)
        console.log('requestArray: ', requestArray)
      }
      this.setState({ 
          users: requestArray[0],
          posts: requestArray[1],
          albums: requestArray[2]
        });
      console.log('new state ', this.state);
    }
      catch (err) {
      console.log(`we had an error: ${err}`);
    }
  }

  render() {
    console.log('render');
    return (
      <Fragment>
      <h1 className='titles'>This App is for code testing</h1>
      {/* AsyncAwait Section */}
      <h2 className='titles'>async await</h2>
      <h3 className='titles'>fetching urls and review the data</h3>
      <TableCard
      students={this.state.students}
       />
      }
      </Fragment>
    )
  }
}


export default App;
