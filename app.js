//Array Helpers forEach

var colors = ["red", "green", "blue"];

//ES5
for(var i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

//ES6
colors.forEach(function(color){
  console.log(color);
});
