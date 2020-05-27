//Array Helpers

//forEach
var colors = ["red", "green", "blue"];

//ES5
for(var i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

//ES6
colors.forEach(function(color){
  console.log(color);
});

// forEach Advanced Use
//sum of elements of an array using forEach

var numbers = [3, 5, 6, 10];

var sum = 0;

numbers.forEach(function(number){
    sum += number;
});

console.log(sum);







