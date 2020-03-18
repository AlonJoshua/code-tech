import React from 'react';
import TableCard from '../containers/TableCard';

const AsyncAwait = () => {
	const urls = [
		'https://jsonplaceholder.typicode.com/users',
		'https://jsonplaceholder.typicode.com/photos',
		'https://jsonplaceholder.typicode.com/albums'
	]
	const fetchData = async function () {
		  try {
			const [ users, photos, albums ] = await Promise.all(urls.map(url => {
			fetch(url).then(resp => resp.json())
		}))
			console.log(users)
		} catch (err) {
			 const error = `we had an error ${err}`;
		}
	}

	return (
		<div>
			<h2 className='titles'>async await</h2>
			<h3 className='titles'>fetching urls and review the data</h3>
			<TableCard props={this.fetchData()}/>
		</div>
		)
}

export default AsyncAwait;