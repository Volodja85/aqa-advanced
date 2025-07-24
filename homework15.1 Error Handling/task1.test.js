const { getErrorUrl } = require('./task1/task1.js');

test('запит на неправильну URL-адресу, викликаючи помилку 404', async () => {
	const getResult = await getErrorUrl();
	expect(getResult).toMatch(/Error: 404 Not Found/);
});
