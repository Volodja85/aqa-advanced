// axiosInstance.js (або в твоєму файлі з інтерсепторами)
const axios = require('axios');
const jsonData = require('./env.json');

const api = axios.create({
	baseURL: jsonData.baseUrl,
});

api.interceptors.request.use((config) => {
	console.log(`➡️ ${config.method.toUpperCase()} ${config.url}`); // Тільки метод і URL
	return config;
});

api.interceptors.response.use(
	(response) => {
		console.log(`⬅️ ${response.status} ${response.config.url}`); // Тільки статус і URL відповіді
		return response;
	},
	(error) => {
		console.error(`❌ Error: ${error.message}`);
		return Promise.reject(error);
	},
);

module.exports = api;
