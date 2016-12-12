const movies = require('./movies.json');
// console.log('MOVIES', movies);

export function searchTVShow(show) {
	console.log('name of search show', show);
	// movies.filter((item) => {
	// 	console.log(!!(item.name.indexOf(show) + 1));
	// });
	return movies.filter((item) => {
		// let name = item.charAt(0).toUpperCase() + item.slice(1);
		return !!(item.name.toLowerCase().indexOf(show.toLowerCase()) + 1);
	});
}