import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header/Header';
import SearchInput from './SearchInput/SearchInput';
import ShowList from './ShowList/ShowList';
import Player from './Player/Player';

import { searchTVShow } from '../api/movies';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMovie: '',
			showList: [],
			chosenShow: {},
		};
	}

	handleSearch = (movieName) => {
		this.setState({
			currentMovie: movieName,
			showList: searchTVShow(movieName)
		});
	}

	handleShowChoice = (show) => {
		console.log('chosen show is', show);
		this.setState({chosenShow: show});
	}

	componentDidUpdate() {
		console.log('componentDidUpdate', this.state);
	}

	render() {
		return (
			<Grid>
				<Row>
					<Col md={12}><Header /></Col>
					<Col md={12}><SearchInput onSearch={this.handleSearch}/></Col>
					<Col md={12}><ShowList showList={this.state.showList} onClick={this.handleShowChoice} /></Col>
					<Col md={12} style={{textAlign: 'center'}}><Player show={this.state.chosenShow} /></Col>
				</Row>
			</Grid>
		);
	}
}

export default App;
