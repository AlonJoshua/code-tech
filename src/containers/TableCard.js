import React, { Component } from 'react';

class TableCard extends Component {
	constructor(props) {
		super(props)
	}

	renderTableHeader() {
		let header = Object.keys(this.props.students[0]);
		return header.map((key,i) => {
			return <th key={i}>{key.toUpperCase()}</th>
		})
	}

	renderTableData() {
		return this.props.students.map((student, i) => {
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