//Practice with archaic vars

// A variable declared with car is function scoped inside, and global outside a function
function varFunction(){     
    var x = "This";    
    if(true){             
        var x = "That"; // Variable x redefined   
    }     
    console.log(x); 
}
varFunction()//returns "That", 
console.log(x)//x is undefined here as it is outside the scope of the function

// if TypeScript is not strict: true, the code will signal an error but will generate the JavaScript, run, and display undefined.

/*to stop the production of a javascript file if typescript has an error, 
open file tsconfig.json and set "noEmitOnError": true. In the last example, the code will not produce JavaScript.*/

function letFunction() {
    let x = "This";
    if (true) {
        let x = 137;
    }
    console.log(x); //returns This
}
letFunction();

//here, the let confines x to the if block, usefull in loops to locally iterate a variable
//both x's here can have diffirent types as they inhabit diffirent scopes.  it is therefor not customary to use var


function varLetFunction(){
    var myStringValue = "varStringValue";
    let myStringValueLet = "letStringValue";
    if(true){
        var myStringValue = 123;
        let myStringValueLet = 12345;
    }
}
/*the above function throws an error as the type of mystringvalue has changed in the ifblock
error TS2403: Subsequent variable declarations must have the same type.  
Variable 'myStringValue' must be of type 'string', but here has type 'number'.*/

var myVarVariableOutSide = "I am outside";
let myLetVariableOutSide = "I am outside too";
function letOutsideFunction2() {
    myVarVariableOutSide += " and inside";
    myLetVariableOutSide += " and inside as well";
    console.log(myVarVariableOutSide);
    console.log(myLetVariableOutSide);
    if(true){
        console.log(myVarVariableOutSide);
        console.log(myLetVariableOutSide);     
    }
}
letOutsideFunction2();
/*returns
I am outside and inside
I am outside too and inside as well
I am outside and inside
I am outside too and inside as well
*/
//the above function shows the scope of let and var when declared outside and accessed inside


const x = "111";
x = "this won't compile"; 
const user1 = { id: 1, name: "MyName1" };
const user2 = { id: 2, name: "MyName2" };

user1 = user2; // Cannot assign a constant!

//this wont compile as declaring with const means the variable can not be changed
//however, members of const's can be changed; the below code runs without error
const user1 = { id: 1, name: "MyName1" };
const user2 = { id: 2, name: "MyName2" };

user1.name = user2.name; // Legit!
user1.id = 1000; // Legit !

//here adding an element with push is fine, however, if you were to change mylist, it would through an error
function constFunction() {
    const myList = [1, 2, 3];
    myList.push(4);
    console.log(myList);
}
constFunction();
//illegal opperation on third line
function constBlockedFunction() {
    const myList = [1, 2, 3];
    myList = [1, 2, 3, 4]
    console.log(myList);
}
constBlockedFunction();

//the same applies to objects
function constChangeObject() {
    let obj1 = { p1: "p1value" };
    obj1 = { p1: "p1value changed" };

    const obj2 = { p2: "p2value" };
    obj2 = { p2: "Does not compile" };
    obj2.p2 = "Work!";