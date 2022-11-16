//never type, nothing occures
//used when a type gaurd occurs un a situation where an exception is always thrown.
//never will not function to return undefineid, unlike void

//use:
function functionThrow(): never {
    throw new Error("This function return never");
}

//never is a subtype of every type |  can return never when you declare other explicit type

//typescript can find an unhandled scenario early and at compilation, under else, a potential fail returns never
//if never is not returned, the compiler does not complain

//never is useful when code around multiple types evolve | when a type is added, TS will compute function can return never and not compile

//the code below has an enum with two items, TS knows the default can not ovvure because the function only accepts a string
enum EnumWithChoices {
    ChoiceA,
    ChoiceB,
    ChoiceC,
}

function functionReturnStringFromEnum(c: EnumWithChoices): string {
    switch (c) {
        case EnumWithChoices.ChoiceA:
            return "A";
        case EnumWithChoices.ChoiceB:
            return "B";
        default:
            return unhandledChoiceFromEnum(c);
    }
}

function unhandledChoiceFromEnum(x: never): never {
    throw new Error("Choice not defined");
}
//index.ts(14,44): error TS2345: Argument of type 'EnumWithChoices.ChoiceA' is not assignable to parameter of type 'never'.

//never also used in mapped type to mark that the code should not be in a specific state, else no compile
//never is a subtype of every type, but cannot be a subtype of any type other than itself
function functionReturnNever(): never{
    throw Error("Error Message")
  }
  let s: string = "A string";
  // let n: never = s; // A string is not a subtype of never
  let n: never;
  try{
    n = functionReturnNever();
    s = n; // Assignable because never is a subtype
  }
  catch(e){
    console.log(e.message);
  }

//in cases TS is unable to indentify a variable as a speicif type, it sets to never
//the following else is coded in a block only allowing number or boolean, setting value to never 
declare function ajaxCall(): number | boolean;
let data : number | boolean = ajaxCall();
if (typeof data == "number"){
  console.log(`The data is a number type: ${typeof data}`);
} else if (typeof data == "boolean"){
  console.log(`The data is a boolean type: ${typeof data}`);
} else{
  console.log(`Impossible ELSE case: ${typeof data}`); // Hover data here reveals type never
}

//function types as never
let a1 = () => {   //a1 is never
    throw new Error("A");
}

let b1 = function() {  //b1 is never
    throw new Error("B");
}

function c1() { //c1 is void
    throw new Error("C");
}