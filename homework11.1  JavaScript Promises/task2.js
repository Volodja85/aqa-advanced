function getTodo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.catch((error) => {
			console.log('Помилка отримання todos:', error);
		});
}

function getUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => response.json())
		.catch((error) => {
			console.log('Помилка отримання users:', error);
		});
}

const promisesCollectionAll = Promise.all([getTodo(), getUser()]);
promisesCollectionAll
	.then(([todo, user]) => {
		console.log('Promise.all result!');
		console.log('Promise.all-Todo:', todo);
		console.log('Promise.all-User:', user);
	})
	.catch((error) => {
		console.log('Помилка в Promise.all:', error);
	});

const promisesCollectionRace = Promise.race([getTodo(), getUser()]);
promisesCollectionRace
	.then((x) => {
		console.log('Promise.race result!');
		console.log(x);
	})
	.catch((error) => {
		console.log('Помилка в Promise.race:', error);
	});
