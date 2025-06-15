function getRectangleAreaDeclation(width, height) {
  return width * height;
}

const getRectangleAreaExpression = function (width, height) {
  return width * height;
};

const getRectangleAreaArrow = (width, height) => width * height;

console.log("Function Declaration: ", getRectangleAreaDeclation(5, 10));
console.log("Function Expression: ", getRectangleAreaExpression(5, 10));
console.log("Arrow Function: ", getRectangleAreaArrow(5, 10));
