//Typescript assigns a type to list

//declaring a list like:
let a: number[];

//or initializing values like:
let arrayOfNumber = [1, 2, 3]; 

let arrayOfString = ["string", "array", "only"];

let usingArraySyntax: Array<number> = [1, 2, 3]; 

//TypeScript can narrow down during initialization to which type it can be.
let multipleTypeArray = [1, true, 3]; 
// Same as:
let multipleTypeArrayExplicit: (number | boolean)[] = [1, true, 3]; 

//explicit declaration is not enforced, but is recommended for good code maintaintance
// If you are explicit, future additions are force constrained to type

//instantiating a strongly typed object array
let myArray = new Array<number>();
printArray(myArray);

// Is the same as:
let myArray2: Array<number> = [];
printArray(myArray2);

// Is the same as:
let myArray3: number[] = [];
printArray(myArray3);

function printArray(a: number[]): void {
    console.log(`Before: ${a}`);
    a.push(1);
    console.log(`After: ${a}`);
}
/*
Output
Before: 
After: 1
Before: 
After: 1
Before: 
After: 1
*/

//arrays can be made immutubele with ReadonlyArray as:
let list: ReadonlyArray<number> = [1, 2];
list.push(3);
console.log(list);
//returns error for second line

//readonly can also be written as:
let list: readonly number[] = [1, 2];
list.push(3);
console.log(list);
//reeturns same error for second line

//the following list is mutable, it can be appended, but the list reference itself is immutable 
const list1: number[] = [1, 2];
list1.push(3); // Legit because list1 is not re-assigned.
// list1 = [4, 5]; // ERROR: We cannot reassign a constant

// the empty array evolves type from any onto which elements are pushed or shifted into it, the type is finnaly atributed one there are no changes

