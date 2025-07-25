const axios = require('axios');

async function getPostsId(id) {
	try {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
		return response.data;
	} catch (error) {
		return 'Error: ' + error.response.status + ' ' + error.response.statusText;
	}
}

module.exports = { getPostsId };
