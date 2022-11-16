//the unknown type is half any half specif type
//setting type as unknown allows wide variety of types without allowing unwanted access to properties or values

//below an any variable gets assigned a string and then a number, when the number tries to use the substr function crashes
let variable1: any;
variable1 = "It is a string";
console.log(variable1.substr(0,2)) // Output "it"
variable1 = 1;
console.log(variable1.substr(0,2)) // Crash TypeError: variable1.substr is not a function

//changing any to undefined makes TS cautiously stop the function from being invoked 

let variable2: unknown;
variable2 = "It is a string";
console.log(variable2.substr(0,2)) // Does not compile here
variable2 = 1;
console.log(variable2.substr(0,2)) // Does not compile here
/* index.ts(3,13): error TS2571: Object is of type 'unknown'.
index.ts(5,13): error TS2571: Object is of type 'unknown'.*/

//to accomodate the above problem, you must assert type:
let variable3: unknown;
variable3 = "It is a string";
let variable3String = variable3 as string;
console.log(variable3String.substr(0,2)) 

//unknown and null are both falsy as per Javascript and do not need validation through ==, ===

//TS 3.7 and newer allow for optional chaining (?.) which returns undefined if the chain contains a property that is null OR undefined otherwise returning the value

//without optional chaining of objects with nested undefined/null values.  only the last value is printed
interface ObjectC {
    m3: string;
}
interface ObjectB {
    m2?: ObjectC;
}
interface ObjectA {
    m1?: ObjectB;
}

function print(o: ObjectA): void {
    if (o.m1) {
        if (o.m1.m2) {
            console.log(o.m1.m2.m3);
        }
    }
}

const obj1: ObjectA = {
    m1: undefined,
};
const obj2: ObjectA = {
    m1: {
        m2: undefined,
    },
};
const obj3: ObjectA = {
    m1: {
        m2: {
            m3: "Yeah!",
        },
    },
};
print(obj1);
print(obj2);
print(obj3);

//same example with optional chaining

interface ObjectC {
    m3: string;
}
interface ObjectB {
    m2?: ObjectC;
}
interface ObjectA {
    m1?: ObjectB;
}

function print(o: ObjectA): void {
  if(o.m1?.m2){                             //optional chain
    console.log(o.m1.m2.m3);
  }
}

const obj1: ObjectA = {
    m1: undefined,
};
const obj2: ObjectA = {
    m1: {
        m2: undefined,
    },
};
const obj3: ObjectA = {
    m1: {
        m2: {
            m3: "Yeah!",
        },
    },
};
print(obj1);
print(obj2);
print(obj3);

//TS also has a nullish coalescing that allows for reduction before something can be null or undefined
//the following code sometimes returns the value from the function and sometimes the default value
function getValue(): string | undefined{
    if (Math.random() > 0.5){
      return undefined;
    }
    return "Good";
  }
  
  let value = getValue();
  if(!value){
    value = "Default"
  }
  console.log(value);

  //newer TS 3.7 it is possible to avoid if with (??)
  //since the constructor of the bollean is unknown the type is sure to remain the same inside the booleans constroctor and keep code there to access properties
  
  //the code above can be written as below with the ?? operator

  function getValue(): string | undefined{
    if (Math.random() > 0.5){
      return undefined;
    }
    return "Good";
  }
  
  let value = getValue() ?? "Default";
  console.log(value);