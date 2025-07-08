const number = 5;

console.log('Multiplication table for the <for> loop:');
for (let index = 1; index <= 10; index++) {
	console.log(`${number} x ${index} = ${number * index}`);
}

console.log('\nMultiplication table for the <While> loop:');
let index = 1;
while (index <= 10) {
	console.log(`${number} x ${index} = ${number * index}`);
	index++;
}
