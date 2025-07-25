const axios = require('axios');

async function getHeadersAndParams() {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
		headers: {
			'Content-Type': 'application/json',
		},
		params: {
			userId: 4,
		},
	});
	return response.config;
}

module.exports = { getHeadersAndParams };
