import React from 'react';
import { Table } from 'react-bootstrap';
import './ShowList.css';

export default class ShowList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const shows = this.props.showList;
		if (shows.length > 0) {
			return(
				<Table responsive hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Year</th>
							<th>Voice</th>
						</tr>
					</thead>
					<tbody>
						{shows.map((item, index) => {
							return (
								<tr key={index} onClick={() => this.props.onClick(item)} className="list-item">
									<td>{index+1}</td>
									<td>{item.name}</td>
									<td>{item.year}</td>
									<td>{item.voice}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			);
		} else return null;
	}
}