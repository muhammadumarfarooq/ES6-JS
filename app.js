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

// console.log(filteredProducts);

//ES6
var newFilteredProducts = products.filter(function (product) {
  return product.type === "fruit";
});

// console.log(newFilteredProducts);

// filter Advanced Use
var advancedFiltered = products.filter(function (product) {
  return product.type === "vegetable" && product.price > 10 && product.quantity > 0;
});

// console.log(advancedFiltered);


//Real life use case
var userPost = { id: 4, name: "Something interesting" };

var userComments = [{ postId: 4, text: "these are some texts" },
  { postId: 4, text: "these are some more texts" }, { postId: 6, text: "these are some texts" }];


function commentsForPosts(post, comments) {
  return comments.filter((comment) => {
    return comment.postId === post.id;
  });
}

// console.log(commentsForPosts(userPost, userComments));

//===== Find Helper =====

var users = [{ name: "Alex" },
  { name: "Joe" }, { name: "Andrew" }];

var user;
//ES5
for ( var i = 0; i < users.length; i++ ) {
  if ( users[i].name === "Joe" ) {
    user = users[i];
    break;
  }
}

// console.log(user);

//ES6
var returnedUser = users.find(function (user) {
  return user.name === "Joe";
});

// console.log(returnedUser);

// find Advanced Use

var posts = [{ id: 1, title: "New Post" }, { id: 2, title: "Old Post" }];

var comment = { postId: 2, content: "Great post" };

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  });
}

// console.log(postForComment(posts, comment));

//===== The EVERY and SUM Helper =====

var computers = [
  { name: "compaq", ram: 4 },
  { name: "dell", ram: 16 },
  { name: "hp", ram: 32 }
];

//ES5
var allComputersCanRunProgram = true;
var someComputersCanRunProgram = false;

for(var i = 0; i < computers.length; i++){
    var computer = computers[i];
    
    if(computer.ram < 16){
      allComputersCanRunProgram = false;
    }else{
      someComputersCanRunProgram = true;
    }
}

// console.log("allComputersCanRunProgram:", allComputersCanRunProgram);
// console.log("someComputersCanRunProgram:", someComputersCanRunProgram);

//ES6
//EVERY
var allComputersCanRunProgramNew = computers.every(function(computer){
  return computer.ram > 16;
});

// console.log(allComputersCanRunProgramNew);

// SOME
var someComputersCanRunProgramNew = computers.some(function(computer){
    return computer.ram > 16;
});


// console.log(someComputersCanRunProgramNew);

//More with every and some

var names = ["Umar", "Ali", "Hassan", "Umair"];

var allNamesHaveLenght = names.every(function (name) {
  return name.length > 3;
});

// console.log(allNamesHaveLenght);


var someNamesHaveLenght = names.some(function (name) {
  return name.length > 3;
});

// console.log(someNamesHaveLenght);

//Real World use

function Field(value){
  this.value = value;
}

Field.prototype.validate = function(){
  return this.value.length > 4;
};

var username = new Field("malik_umar");
var password = new Field("123456");
var dob = new Field("20/05/1998");

// console.log(username.validate());
// console.log(password.validate());
// console.log(dob.validate());


// console.log(username.validate() && password.validate() && dob.validate());
var fields = [username, password, dob];

var formIsValid = fields.every(function (field) {
    return field.validate();
});

// console.log(formIsValid);


//===== The REDUCE Helper =====

var numbersReduce = [1, 6, 10];

//ES5

var sum = 0;

for(var i = 0; i < numbersReduce.length; i++){
  sum += numbersReduce[i]
}

// console.log(sum);

//ES6

var sumNew = numbersReduce.reduce(function(previous, number){
  return previous + number;
}, 0);

console.log(sumNew);

































































