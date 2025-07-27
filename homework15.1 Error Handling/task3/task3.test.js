const axios = require('axios');
const { getPostsId } = require('./task3MockedApi.js');
jest.mock('axios');

describe('getPostsId', () => {
	it('returns post data on successful request', async () => {
		const mockData = { id: 11, title: 'et ea vero quia laudantium autem' };
		axios.get.mockResolvedValue({ data: mockData });

		const result = await getPostsId(11);
		expect(result).toEqual(mockData);
	});

	it('returns an error message on failed request', async () => {
		axios.get.mockRejectedValue({
			response: {
				//status: 401,
				status: 404,
				statusText: 'Not Found',
			},
		});

		const result = await getPostsId(104);
		expect(result).toBe('Error: 404 Not Found');
	});
});
