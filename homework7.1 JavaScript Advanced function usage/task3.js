function divide(numerator, denominator) {
	if (typeof numerator !== 'number' || typeof denominator !== 'number') {
		throw new Error('Arguments must be numbers');
	}
	if (denominator === 0) {
		throw new Error('Division by zero is impossible');
	}
	return numerator / denominator;
}
try {
	const getResalt1 = divide(10, 2);
	console.log('Resalt:', getResalt1);
} catch (error) {
	console.error('Error:', error.message);
} finally {
	console.log('Робота завершена');
}

try {
	const getResalt2 = divide(10, 0);
	console.log('Resalt:', getResalt2);
} catch (error) {
	console.error('Error:', error.message);
} finally {
	console.log('Робота завершена');
}

try {
	const getResalt3 = divide('abc', 5);
	console.log('Resalt:', getResalt3);
} catch (error) {
	console.error('Error:', error.message);
} finally {
	console.log('Робота завершена');
}

try {
	const getResalt4 = divide(5, 'abc');
	console.log('Resalt:', getResalt4);
} catch (error) {
	console.error('Error:', error.message);
} finally {
	console.log('Робота завершена');
}
