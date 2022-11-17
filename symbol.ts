//type symbol and subtype unique symbol

//primitive type in ECMAScript from 2015
//can take paramerter with string value
//defining two symbols with same parameters will create a diffirent symbol
//parameters are there to distinguish symbols
//symbols are unique
//non coersable to string

let v1 = "value1";
let v2 = "value1";
if (v1 === v2) {
    console.log("Equal when string"); // This will print
}
let s1 = Symbol("value1");
let s2 = Symbol("value1");
if (s1 === s2) {
    console.log("Equal when symbol"); // This will not print, they are not equal
}

//object property can be a symbol
//can not be invoke with Object.defineProperty or Object.getOwnPropertyNames

//to get all properties defined by symbols, use getOwnPropertySymbols
//if all properties defined are required, you must use Reflect.ownkeys()
//goal is to define a specific member of the object to avoid collisions that string can not prevent

const property1 = Symbol();
const obj = { [property1]: "p1"};

console.log(obj[property1]) //"p1"
console.log(obj[property1]) //typeing . property intellence converts to accepted format

//A unique symbol can only be defined with the use of const or readonly static
//used to create a literal type
//type is not symbol, but a value symbol with a unique identity
//for example, a string can be string or string literal :
let aString: string = "Value 1"; //type string
aString = "Value 2";  //let values of Symbol mutable like other primitives
const aSecondString = "Value3"; //type Value3


let aSymbol: Symbol = Symbol("Value1");
aSymbol = Symbol("Value2"); // Type is: Symbol

const aSecondSymbol: Symbol = Symbol("Value3");  // Type is: Symbol
const aThirdSymbol: unique symbol = Symbol("Value3");  // Type is: typeof(aThirdSymbol)

//A unique symbol can only be declared with const.
//They are also unique therefore, if compared, will always return false.
let s1: Symbol = Symbol("s1"); // Type is: Symbol
const s2: Symbol = Symbol("s2");  // Type is: Symbol
const s3: unique symbol = Symbol("s3");  // Type is: typeof(s3)
const s4: unique symbol = Symbol("s4");  // Type is: typeof(s4)

if (s1 === s2) {
    console.log("S1 and S2 are the same symbol"); // Won't print
}

if (s3 === s2) {
    console.log("S3 and S2 are the same symbol"); // Won't print
}

// if (s3 === s4) {
//     // Does not compile
// }