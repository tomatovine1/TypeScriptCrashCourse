//most basic primitive, 
//restricted to true or false

let b = true;
console.log(typeof(b));

//prints boolean
//case sensative, starts with lower case, not 0 or 1 as with some other languages

//can be negated with !(exclamation before)
let myValueCanChange: boolean = true;
console.log(myValueCanChange);
myValueCanChange = !myValueCanChange;
console.log(myValueCanChange);
//true changed to false on line 13

//often the result of boolean opperators === or <, >, !==, <=, >=.
let number1 = 5;
let number2 = 5;
let number3 = 100;
let biggerThan: boolean = number1 > number3;
console.log(biggerThan); // False

let smallerThan: boolean = number1 < number3;
console.log(smallerThan); // True

let biggerOrEqualThan: boolean = number1 <= number2;
console.log(biggerOrEqualThan); // True

let beEqual: boolean = number3 === number3; 
console.log(beEqual); // True

let notBeEqual: boolean = number1 !== number3; 
console.log(notBeEqual); // True

//some values are truthy or falsy
//undefined, null, -0, 0, NaN return false
//an empty object, an apty array are true
let x1 = undefined;
let x2 = null;
let x3 = -0;
let x4 = 0;
let x5 = NaN;
let x6 = {};
let x7: any[] = [];
function printTruthyFalsy(b: any | any[]): void{
    if(x){
        console.log(`${x} is true`)
    }  else{
        `${x} is flase`
    }
}
/*All types in TypeScript are subtypes 
of a single top type called the Any type. 
The any keyword references this type. The Any type
 is the one type that can represent any JavaScript 
 value with no constraints. All other types are 
 categorized as primitive types, object types, or 
  parameters.*/

  //booleans can also be invoked 
console.log(Boolean(undefined)); // False
console.log(Boolean({})); // True
console.log(Boolean([])); // True
console.log(Boolean(false)); // False
console.log(Boolean("false")); // True
console.log(Boolean("not false")); // True

//you can make boolean objects with the keyword new
//the result is not a primitive boolean, rather an object wrapping a boolean 

console.log(new Boolean(false)); // False
console.log(new Boolean("false")); // True
console.log(new Boolean("not false")); // True

//return
/*[Boolean: false]
[Boolean: true]
[Boolean: true]
*/