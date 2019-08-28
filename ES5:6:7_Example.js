//let, var and const

for (var i = 0; i < 10; i++) {
  console.log(i);
}
// We declare the variable i directly inside the for-loop head, because we only want to use i only within the context of that loop.
// This is block scoping. Declaring variables as close as possible, as local as possible, to where they will be used.

//For so long there was just the key word var for declaring a variable, but ES6 has introduced let.
//According to YDKJS book series, the let keyword attaches the variable declaration to the scope of whatever block (commonly a { .. } pair) it's contained in.
//In other words, let implicitly hijacks any block's scope for its variable declaration.

function foo(a) {
  let b = a * 2;
  console.log(b);
  return b;
}
console.log(b); //Uncaught ReferenceError: b is not defined --> This is because the scope of b is only inside function foo

//let vs var

//Main difference is that var is scoped to the nearest function block and let is scoped to the nearest enclosing block, which can be smaller than a function block.
//Both are global if outside any block.
//Also, variables declared with let are not accessible before they are declared in their enclosing block.

//GLOBAL

let me = "go"; // globally scoped
var i = "able"; // globally scoped --> quite the same

//However, global variables defined with let will not be added as properties on the global window object like those defined with var.

console.log(window.me); // undefined
console.log(window.i); // 'able'

//FUNCTION --> same

function test() {
  let cat = "awesome!"; //function block scoped
  var dog = "amazing!"; //function block scoped --> same
}
//BLOCK

function test1() {
  //ano IS NOT visible out here

  for (let ano = 0; ano < 5; ano++) {
    //a is only visible in here (and in the for() parentheses)
    //and there is a separate ano variable for each iteration of the loop
  }
  //ano IS NOT visible here
}

function test2() {
  //taro IS visible out here

  for (var taro = 0; taro < 5; taro++) {
    //taro is visible to the whole function
  }

  //taro IS visible out here
}

//REDECLARATION
//Assuming strict mode, var will let you re-declare the same variable in the same scope. let will not.

("use strict");
var me = "foo";
var me = "bar"; // 'me' is replaced.

("use strict");
let me = "foo";
let me = "bar"; // SyntaxError: Identifier 'me' has already been declared.

//const : Constants defined with const follow the same scope rules as variables, but they can’t be redeclared.

const dataTemp = [...this.props.participants];

dataTemp.sort((participant1, participant2) => {
  return participant1.money - participant2.money;
}); // -->this will not have any effect on value of dataTemp

//arrow function example

//old school
dataTemp.sort(function(participant1, participant2) {
  return participant1.money - participant2.money;
});

//with arrow function
dataTemp.sort((participant1, participant2) => {
  return participant1.money - participant2.money;
});

//map, forEach, filter, reduce, find

//forEach is like a for loop but it's faster because you skip the steps of declaring the iterator value, end point and how to iterate.

// When to use forEach?
// .forEach() is great you need to execute a function for each individual element in an array. Does not create and return new array.

dataTemp.forEach(item => {
  total = total + parseFloat(item.money);
});

// When to use map?
// .map() when you want to transform elements in an array. map() returns a new resulting array.

let statementList = this.state.result.map((statement, index) => (
  <li key={index}>{statement}</li>
));

// When to use filter?
// .filter() when you want to select a subset of multiple elements from an array.

items
  .filter((item, index) => index < 4)
  .map(({ id, ...props }) => <CollectionItem key={id} {...props} />);

// When to use find?
// .find() When you want to select a single element from an array.

// When to use reduce?
// .reduce() when you want derive a single value from multiple elements in an array. reduce() also runs a callback for each element of an array like map().
//What’s different here is that reduce passes the result of this callback (the accumulator) from one array element to the other.
