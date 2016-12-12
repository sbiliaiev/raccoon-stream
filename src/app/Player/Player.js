import React from 'react';

export default class Player extends React.Component {

	componentDidUpdate() {
		console.log('UPDATE', this.props);
	}

	render() {
		const show = this.props.show;
		if (show.source) {
			console.log('here it comes', this.props);
			return <div dangerouslySetInnerHTML={createMarkup()} />;
		} else return null;
		function createMarkup() {
			return {__html: show.source};
		}
	}
}