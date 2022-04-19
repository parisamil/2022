console.log("Hello, World!");
// Hello Wolrd!
// Hello..?
console.log("hmm, I guess I am alone!");
// CAN YOU HEAR ME!?
// God dang it.
/* At least multi-line comment is cool,
even though he can't hear me I guess */
console.log("Let's start the adventure!");
var nothing = "null"
const pi = "3.141"



var a = 5;
console.log(a);
a += 1;
// how to simplify adding process
console.log(a);



let x = 15;
console.log(x);
x = x + 11;
console.log(x);



// how to use remainder
let remainder = 1000 % 34;
console.log(remainder);

// double quoted
let doubleQuote = "My name is \"John Cena\"."
console.log(doubleQuote);
let tripleLine = "Firstline\n\t\SecondLine\nThridline"
console.log(tripleLine);

// first name(start from 0)
var firstName = "Lucas";
var firstLetterOfFirstName = firstName[0];
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(firstLetterOfFirstName);
console.log(lastLetterOfFirstName);

// array
let array = [10, 30, 40];
array[2] = 50;
console.log(array);

// function
function world(){
  console.log("Hello, World!");
}
world();
world();

function subtract(a, b){
  console.log (a - b);
}
subtract(15, 6);

function makeNegative(num){
  if (num > 0){
    num = num - (num * 2);
  }
}
makeNegative(32)

//function with return
function addTwo(num){
  return(num + 2);
}
console.log(addTwo(3));
