/*
Lab 3 - simple TDD with math functions
Starter file
Create the following functions as per the instructions below.
Read the test cases carefully and write the functions accordingly.
NOTE: The name of the functions have
to match the exported names mentioned at the end of this file
in order to pass the test cases.
To run the test cases, run the following command on your terminal:
node --test
*/

//add function
const add = (a, b) => {
  //write your code here
  return a+b; //return the result
};

//subtract function
const subtract = (a, b) => {
  //write your code here
  return a-b; //return the result
};

//multiply function
const multiply = (a, b) => {
  //write your code here
  return a*b; //return the result
};

//divide function
const divide = (a, b) => {
  //write your code here
  return a/b; //return the result
};

//modulas function
const modulas = (a, b) => {
  //write your code here
  return a%b; //return the result
};

//power function
const power = (a, b) => {
  //write your code here
  return Math.pow(a,b); //return the result
};

//square function
const square = (a) => {
  //write your code here
  return a*a; //return the result
};

//floor function
const floor = (a) => {
  //write your code here
  return Math.floor(a); //return the result
};

//ceiling function
const ceiling = (a) => {
  //write your code here
  return Math.ceil(a); //return the result
};

////////////////////////////////////////

//export functions
//Please do not change the following line.

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  square,
  floor,
  ceiling,
};
