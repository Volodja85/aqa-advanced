function recursiveNumber(num) {
  if (num > 0) {
    console.log(num);
    recursiveNumber(--num);
  }
  return;
}

recursiveNumber(5);
