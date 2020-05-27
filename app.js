//Array Helpers

//===== forEach Helper =====
var colors = ["red", "green", "blue"];

//ES5
for ( var i = 0; i < colors.length; i++ ) {
  console.log(colors[i]);
}

//ES6
colors.forEach(function (color) {
  // console.log(color);
});

// forEach Advanced Use
//sum of elements of an array using forEach

var numbers = [3, 5, 6, 10];

var sum = 0;

numbers.forEach(function (number) {
  sum += number;
});

// console.log(sum);

//===== Map Helper =====

var numbersSingle = [2, 4, 6];
var numbersDouble = [];

//ES5
for ( var i = 0; i < numbersSingle.length; i++ ) {
  numbersDouble.push(numbersSingle[i] * 2);
}

console.log(numbersDouble);

//ES6

const newNumbersDouble = numbersSingle.map(function (number) {
  return number * 2;
});

console.log(newNumbersDouble);





