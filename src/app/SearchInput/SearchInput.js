import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button, Form } from 'react-bootstrap';

export default class SearchInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSearch: ''
		};
	}

	handleInputChange = (event) => {
		this.setState({currentSearch: event.target.value});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSearch(this.state.currentSearch);
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				
				<FormGroup controlId="formControlsText">
					<ControlLabel>Search show</ControlLabel>
					<FormControl type="text" placeholder="Enter text" onChange={this.handleInputChange} />
				</FormGroup>
				
				<Button bsSize="large" bsStyle="primary" block type="submit">
					Search
				</Button>

			</Form>
		);
	}
}