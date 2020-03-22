import React from 'react';
import TableCard from '../containers/TableCard';

const AsyncAwait = () => {
	const urls = [
		'https://jsonplaceholder.typicode.com/users',
		'https://jsonplaceholder.typicode.com/posts',
		'https://jsonplaceholder.typicode.com/albums'
	]
	const fetchData = async function () {
		  try {
			const arrayOfPromises = urls.map(url => fetch(url))
			for await (let request of arrayOfPromises) {
				const data = await request.json();
				this.setState(data);
			}
		}
		  catch (err) {
			const error = `we had an error ${err}`;
		}
	}

	return (
		<div>
			<h2 className='titles'>async await</h2>
			<h3 className='titles'>fetching urls and review the data</h3>
			<TableCard fetchData={fetchData()}/>
		</div>
		)
}

export default AsyncAwait;