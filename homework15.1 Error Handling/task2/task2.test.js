const { getHeadersAndParams } = require('./task2.js');

test('checking that headers and parameters are correctly included in the request', async () => {
	const getResult = await getHeadersAndParams();

	expect(getResult.headers['Content-Type']).toBe('application/json');
	expect(getResult.params.userId).toBe(4);
	expect(getResult.url).toContain('/posts');
});
