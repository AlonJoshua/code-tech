import React, { Component } from 'react';

class TableCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			students: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
		};
	}

	fetchData = async function () {
		const urls = [
		'https://jsonplaceholder.typicode.com/users',
		'https://jsonplaceholder.typicode.com/posts',
		'https://jsonplaceholder.typicode.com/albums'
	]
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

	renderTableHeader() {
		let header = Object.keys(this.state.students[0]);
		return header.map((key,i) => {
			return <th key={i}>{key.toUpperCase()}</th>
		})
	}

	renderTableData() {
		return this.state.students.map((student, i) => {
			const { id, name, age, email } = student;
			return (
				<tr key={id}>
					<td>{id}</td>
					<td>{name}</td>
					<td>{age}</td>
					<td>{email}</td>
				</tr>
				)
		})
	}

	render() {
	return(
		<div>
			<h3 className='titles'>React Dynamic Table</h3>
			<table className='tables'>
				<tbody>
					<tr>{this.renderTableHeader()}</tr>
					{this.renderTableData()}
				</tbody>
			</table>
		</div>
		)
	}
}

export default TableCard;