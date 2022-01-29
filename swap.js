var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");
var temp;
temp = num1;
num1 = num2;
num2 = temp;
console.log("The value of first number after swapping: " + num1);
console.log("The value of second number after swapping: " + num2);