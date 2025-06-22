function recursiveNumber(num) {
  if (num > 0) {
    console.log(num);
    recursiveNumber(--num);
  }
}

recursiveNumber(5);
