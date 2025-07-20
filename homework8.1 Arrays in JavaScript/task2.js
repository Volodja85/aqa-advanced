const array = [1, 2, 3, 4, 5];

const newArray = array.map(function (value, index) {
	return value * index;
});

console.log(newArray);
