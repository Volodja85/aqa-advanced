const axios = require('axios');

async function getErrorUrl() {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/notfound');
		console.log(response.data);
		return response.data;
	} catch (error) {
		return 'Error: ' + error.response.status + ' ' + error.response.statusText;
	}
}

module.exports = { getErrorUrl };
