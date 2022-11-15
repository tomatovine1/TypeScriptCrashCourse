//More on Shadowing

//Type script is able to distinguish between the scopes of a shadow
//However, it is good practice to use diffirent variable, even if the transpiler doesn't complain

function foo(i:number) {
    console.log("value:", i);
    let i: number = 10;
}
foo(1);
//here type script throws the error that there is a duplicate variable
//Javascript would not have caught this

//the code below is executed without error, since each shadow is within its own loop
function f1(i2: number) {
    // i will be shadowed
    console.log("Parameter value:", i2);
    let i: number = 10; // Shadow #1
    console.log("Variable value:", i);
    for (let i = 100; i < 101; i++) {
        // Shadow #2
        console.log("For-statement value:", i);
        for (let i = 200; i < 201; i++) {
            // Shadow #3
            console.log("For-statement value 2:", i);
        }
    }
    console.log("Variable value:", i);
}
f1(0);
// in the following code, the 4th line is trying to use the variable outside its scope(If block) and throws an error
function f2() {
    let i: number = 10; 
    if(true){
        console.log("Variable in IF before value:", i);
        let i: number = 100;
        console.log("Variable in IF after value:", i);
    }
    console.log("Variable value:", i);
}
f2();

//the below code shows that a shadow in a diffirent scope can have a diffirent type
function f3() {
    let i: number = 10; // Shadow #1
    if(true){
        let i: string = "Now a string value";
        console.log("Variable in IF after value:", i);
    }
    console.log("Variable value:", i);
}
f3();
/* returns 
Variable in IF after value: Now a string value
Variable value: 10
*/

//Touching base with Capture
//This happens when a variable is defined in an inner scope,
//...which is then used inside a function that is assigned another scope
//The variable in the inner scope is captured
//the function declared before the inner scope will have the value as well

function fooBar() {
    let innerFunction;
    if (true) {
        //capturing
        let varInner = "available to innerFunction";
        innerFunction = function() {
            return varInner;
        };
    }
    return innerFunction();
}
console.log(fooBar());

//let and const can be declared once per scope, meaning with several variable with the same name, only the one in scope of invocation is visable
// below, the commented lines result in the variable being outside scope

let x = 1;
console.log("Outside: " + x)
function myFunction(){
  // console.log("Inside before re-declaring: " + x)
  let x = 2;
  console.log("Inside after re-declaring: " + x)
  if (x == 2) {
    let x = 3;
    console.log("Inside IF : " + x)
    function mySecondFunction(){
      // console.log("Inside-Inside before: " + x)
      let x = 4;
      console.log("Inside-Inside after: " + x)
    }
    mySecondFunction();
  }
}
myFunction();
