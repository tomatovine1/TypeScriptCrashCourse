/* Hoisting brings all declarations made with var to the top of the function or into the global scope */

x = "not declared before assignment"; 
var x = "declared after assignment  and all fine"; 
console.log(x)

//or 

var x: string | undefined = undefined;
x = "not declared before assignment"; 
x = "declared after assignment and all fine"; 
console.log(x);

/* above function doesnt recognize the first line but complies fine how ever, the code is ambigious and would need a let or const*/

//the follwing code does not compile and needs to be hoisted
y = "not declared before assignments"; // Doesn't compile 
let y = "The line before forbid this line";; 
 
z = "not declared before assignments"; // Doesn't compile 
const z = "The line before forbid this line"; 
