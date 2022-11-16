//Undefined  - used to define something that does not exist

//a variable declared but not initialized is undefined
//undefined is diffirent from null, but both undefined and null can be explicitly declared

let variableNotInitialized:string;
console.log(variableNotInitialized); //type script does not allow interaction with unassigned variables

//to make typescript strict so to prevent assigning null or undefineid to every type, set strictNullchecks option to true
// This code will work before TypeScript 2.0
let numberOnlyNotNullOrUndefined: number = 123;
numberOnlyNotNullOrUndefined = null; 
numberOnlyNotNullOrUndefined = undefined; 
console.log(numberOnlyNotNullOrUndefined)

//using uniion to explicitly declare
let numberNullOrUndefined: number | null | undefined = 123;
numberNullOrUndefined = null; 
numberNullOrUndefined = undefined; 
console.log(numberNullOrUndefined)

//a union with undefined makes type optional

function functionWithUndefinedParameter(a:number|undefined, b:number){ }
functionWithUndefinedParameter(1 , 2);
functionWithUndefinedParameter(undefined, 2);
functionWithUndefinedParameter(, 2); // Does not compile, expects two parameters

//using ? instead of |.  ? can be passed unde3fined or nothing
function functionWithQuestionMarkParameter1(a:number, b?:number){}
functionWithQuestionMarkParameter1(1, 2);
functionWithQuestionMarkParameter1(1, undefined);
functionWithQuestionMarkParameter1(1,); //works per ? of declaration

function functionWithQuestionMarkBeforeARequiredParameter(a:number?, b: number){} //incorrect syntax

//With a clean-cut assertion by type of what can be undefined (optional), null, or with a specific value, the code becomes more comprehensible.
let canBeANumberOrNull: number | null;
canBeANumberOrNull = 10;
canBeANumberOrNull = null;
// canBeANumberOrNull = undefined; // Uncomment and it will not transpile

function function1(a:number|undefined, b:number){ } 
 
function function2(a?:number, b:number){ } // Doesn't compile because a is using optional ? and b is not undefined
//index.ts(3,31): error TS1016: A required parameter cannot follow an optional parameter. must be :
function function2(a:number, b?:number){ }

//a union with undefined means the user must specify undefined
function function1(a:number|undefined, b:number){ 
    console.log(a);
    console.log(b);
} 
function function3(a:number, b?:number){ 
    console.log(a);
    console.log(b);
}

function1(1, 2);
function1(undefined, 2)
function3(3)
function3(3, undefined)
/* Output
1
2
undefined
2
3
undefined
3
undefined*/

//avoid nulll, rely on undefinied, javascript leans towards undefined

//in typescript the following does not compile, in javascript it returns undefined
let aNumber: number; // cannot be undefined  but is undefined
console.log(aNumber);

//the following normally would return undefined, but with strictness it will return error
class MyClass{
    private a: number |undefined ; // Error here if not union with undefined
   constructor(){
        console.log(this.a); // It does not compile
    }
}

//the following code adds the extra complexity of null, can be avoided with just undefined
function f1(p1: null | undefined | number, p2: undefined | number, p3?: number ) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
} 
//all three lines loged as undefined, no error

//when a function or class does not always require a variable, undefined is handy, 
//undefined can also trigger the default behaviour of the function: 
function functionWithDefault(p1: number = 1) {
    console.log(p1);
}
functionWithDefault();
functionWithDefault(undefined);
functionWithDefault(100);
//undefined may be used until the data arrives from the external source:
function getDelayedValue(){
    let dataIsNotYetThere: string | undefined;

    dataIsNotYetThere = fetchData(); //example case

    return dataIsNotYetThere; // It "should" be with a value at that point
}
/* Undefined and optional values transpile into the same code as if nothing were assigned to the variables. 
This is because JavaScript is not aware of the concept. For example, a numeric variable with no value will simply be undefined (not null).*/
/*  A good use case for null is to differentiate between:

An uninitialized variable: should be undefined
A variable clearly representing the absence of something: should be null
A variable representing a value: should neither be undefined, nor null*/
