const { getErrorUrl } = require('./task1.js');

test('requesting an invalid URL, causing a 404 error', async () => {
	const getResult = await getErrorUrl();
	expect(getResult).toMatch(/Error: 404 Not Found/);
});
