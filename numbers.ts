//numbers

//a number can be integer, unsigned/signed float, by default base 10
//javascript unassignes type, since it is an untyped language, unless "typeof" is declared

//below are three variables declaured with let, var and const

const x: number = 10;  //error generated block scope, because it is used in another file
let z1: number = 15;
var p: number = 123;
console.log("Here are 3 variables of type number", x, z, p);

//changing base to base 16 (hexadecimal), base 8 (octal) or base 2 (binary) with the prefix 0x, 0o and 0bas follows
let dec: number = 10;
let hex: number = 0x10;
let octo: number = 0o10;
let bin: number = 0b10;
console.log("Here are 4 numbers", dec, hex, octo, bin);
//prints Here are 4 numbers 10 16 8 2

//there is no need to explicitly declare number, typescript can infer type
let dec2 = 10; 
let hex2 = 0x10; 
let octo2 = 0o10; 
let bin2 = 0b10; 
console.log("Here is 4 numbers", dec2,hex2,octo2,bin2);
//works the same

//types can be checked at runtime
let int: number = 1;
let float: number = 1.1;
let negative: number = -100;
console.log(typeof(int));
console.log(typeof(float));
console.log(typeof(negative));

// number can be assigned NaN, not a number, NaN is a number

let myNumberIsNotANumber: number = NaN;
console.log(myNumberIsNotANumber);
console.log(typeof(myNumberIsNotANumber));

//numbers can be seperated with underscore to make them more readable without changing their values
const numericSeparator1 = 560000067;
const numericSeparator2 = 560_000_067;
const numericSeparator3 = 5_6_0_000_0_6_7;
const numericSeparator4 = Number(5_000);
const numericSeparator5 = Number("5_000"); // Nan 
const numericSeparator6 = parseInt("5_000");  
const numericSeparator7 =  0xFAB_F00D; 
const numericSeparator8 =  0b1111_11111000_11110000_00001100;
console.log(numericSeparator1)
console.log(numericSeparator2)
console.log(numericSeparator3)
console.log(numericSeparator4)
console.log(numericSeparator5)
console.log(numericSeparator6)
console.log(numericSeparator7)
console.log(numericSeparator8)
/*returns 
560000067
560000067
560000067
5000
NaN
5
262926349
267972620
*/

//pitfall:  using NaN, javascript cannot transform a string with a seperator and does not warn or give error at transpilation time as it sees it as a string