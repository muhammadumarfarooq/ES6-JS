//Array Helpers

//===== forEach Helper =====
var colors = ["red", "green", "blue"];

//ES5
for ( var i = 0; i < colors.length; i++ ) {
  // console.log(colors[i]);
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

//practical use case: to call a method several times i.e to delete spam emails.

//===== Map Helper =====

var numbersSingle = [2, 4, 6];
var numbersDouble = [];

//ES5
for ( var i = 0; i < numbersSingle.length; i++ ) {
  numbersDouble.push(numbersSingle[i] * 2);
}

// console.log(numbersDouble);

//ES6

var newNumbersDouble = numbersSingle.map(function (number) {
  return number * 2;
});

// console.log(newNumbersDouble);

// map Advanced Use
//plucking properties

var cars = [
  { modal: "Buick", price: "Cheap" },
  { modal: "Camaro", price: "Expensive" }
];

var carPrices = cars.map(function (car) {
  return car.price;
});

// console.log(carPrices);

//practical use case: to render list of items on web page.


//===== Filter Helper =====
var products = [
  { name: "banana", type: 'fruit', quantity: 1, price: 5 },
  { name: "cucumber", type: 'vegetable', quantity: 0, price: 9 },
  { name: "carrot", type: 'vegetable', quantity: 10, price: 21 },
  { name: "mango", type: 'fruit', quantity: 13, price: 1 },
];

//ES5
var filteredProducts = [];

for ( var i = 0; i < products.length; i++ ) {
  if ( products[i].type === "vegetable" ) {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

//ES6
var newFilteredProducts = products.filter(function (product) {
  return product.type === "fruit";
});

console.log(newFilteredProducts);

// filter Advanced Use
var advancedFiltered = products.filter(function (product) {
  return product.type === "vegetable" && product.price > 10 && product.quantity > 0;
});

console.log(advancedFiltered);


//Real life use case
var userPost = {id: 4, name: "Something interesting"};

var userComments = [{postId: 4, text: "these are some texts"},
  {postId: 4, text: "these are some more texts"}, {postId: 6, text: "these are some texts"}];


function commentsForPosts(post, comments){
  return comments.filter((comment) => {
    return comment.postId === post.id;
  });
}

console.log(commentsForPosts(userPost, userComments));
