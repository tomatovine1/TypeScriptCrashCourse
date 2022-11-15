//Working with strings

//can be decalred with single or double quotes, double quotes recommended by Typescript
//contents behave as characters

let w = "Value1";
let x = "this is a string with the value " + w;
let y = 'this is a string with the value ' + w;
let z = `this is a string ${w}`;
console.log(w,x,y,z)
//prints 
/*
Value1 this is a string with the value Value1 this is a string with the value Value1 this is a string Value1
*/

//use backquotes to format string above a variable z (interpolation)

// \n for new line or backquotes to register newline ie:

let multiline1 = "Line1\n" + "Line2\n" + "Line3\n";

let multiline2 = `Line1 
Line2 
Line3`;

console.log(multiline1);
console.log(multiline2);

//can also have typescript code interpolated ie:
function getPrice(): number{
    return 100;
}
let description = `The book is about ${2+5} chapters and cost ${getPrice()}$.`;
console.log(description)

//explicit definition as follows
let myString: string ="I am a string";
let myString2: string = `so am I`;