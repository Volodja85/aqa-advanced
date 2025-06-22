const numbersArray = [1, 10, 14, 2, 4, 5, 43, 34];

//const sortedArray = [...numbersArray];
const sortedArray = numbersArray.concat();

sortedArray.sort((a, b) => a - b);

console.log("Оригінальний масив:", numbersArray);
console.log("Відсортований масив:", sortedArray);
