const api = require('./axiosInstance');
const fs = require('fs');
const jsonData = require('./env.json');

describe('JSONPlaceholder API tests', () => {
	test('GET /posts повертає масив постів', async () => {
		const response = await api.get('/posts');
		expect(response.status).toBe(200); // Check response status
		expect(Array.isArray(response.data)).toBe(true); // Check that data is an array
		expect(response.data.length).toBeGreaterThan(0); // Check that the array is not empty
	});

	test(' Перевірка кожного елемент масиву GET /posts на потрібні властивості', async () => {
		const response = await api.get('/posts');
		response.data.forEach((post) => {
			expect(post).toHaveProperty('userId'); //whether the post object has a userId property
			expect(typeof post.userId).toBe('number'); //checks if the data type is a number

			expect(post).toHaveProperty('id');
			expect(typeof post.id).toBe('number');

			expect(post).toHaveProperty('title');
			expect(typeof post.title).toBe('string');
			expect(post.title.length).toBeGreaterThan(0);

			expect(post).toHaveProperty('body');
			expect(typeof post.body).toBe('string');
			expect(post.body.length).toBeGreaterThan(0); //checks that the length of the body property of the post object is greater than 0
		});
	});

	test(' Перевірка, що перший пост GET /posts на властивість id = 1', async () => {
		const response = await api.get('/posts');

		expect(response.data[0].id).toBe(1);
	});

	test('GET /posts/1 перевірка значень з id=11', async () => {
		const response = await api.get('/posts/11');
		expect(response.status).toBe(200);
		expect(response.data).toHaveProperty('id', 11);
		expect(response.data).toHaveProperty('userId', 2);
		expect(response.data).toHaveProperty('title', 'et ea vero quia laudantium autem');
	});

	test('POST /posts створює новий пост', async () => {
		const newPost = {
			title: 'Test post',
			body: 'the body of the new post created',
			userId: 11,
		};
		const response = await api.post('/posts', newPost);
		expect(response.status).toBe(201);
		expect(response.data).toMatchObject(newPost);
		expect(response.data).toHaveProperty('id');
		let id_value = response.data.id;
		jsonData.id = id_value;
		console.log('Зберігаємо jsonData:', jsonData);
		try {
			fs.writeFileSync('homework14.1 Api testing/env.json', JSON.stringify(jsonData));
		} catch (err) {
			console.error('Помилка при записі у файл:', err);
		}
	});

	test(' перевірка GET /users з значенням id=2', async () => {
		const response = await api.get('/users/2');
		expect(response.status).toBe(200);
		expect(response.data).toHaveProperty('name', 'Ervin Howell');
		expect(response.data).toHaveProperty('username', 'Antonette');
	});

	test(' перевірка GET /users список користувачів', async () => {
		const response = await api.get('/users');
		expect(response.status).toBe(200);
		expect(response.data[0].name).toBe('Leanne Graham');
		expect(response.data[0].username).toBe('Bret');

		expect(response.data[1].name).toBe('Ervin Howell');
		expect(response.data[1].username).toBe('Antonette');

		expect(response.data[2].name).toBe('Clementine Bauch');
		expect(response.data[2].username).toBe('Samantha');
	});

	test('GET /users повертає спишку на статус 200', async () => {
		const response = await api.get('/users');
		expect(response.status).toBe(200);
		expect(Array.isArray(response.data)).toBe(true);
	});

	test('перевірка GET /comments/1 на коментар', async () => {
		const response = await api.get('/comments/1');
		expect(response.status).toBe(200);
		expect(response.data).toHaveProperty('id', 1);
		expect(response.data).toHaveProperty('postId', 1);
		expect(response.data).toHaveProperty('body', jsonData.body);
	});
});
