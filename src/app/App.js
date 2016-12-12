import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
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
					<Col md={12} sm={12} xs={12}><Header /></Col>
				</Row>

				<Row className="search-input">
					<Col md={8} mdOffset={2} xs={12} sm={10} smOffset={1}
						style={{textAlign: 'center'}}>
						<SearchInput onSearch={this.handleSearch}/>
					</Col>
				</Row>
				
				<Row className="player">
					<Col md={12}><Player show={this.state.chosenShow} /></Col>
				</Row>

				<Row className="show-list">
					<Col md={12}>
						<ShowList showList={this.state.showList} onClick={this.handleShowChoice} />
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default App;
