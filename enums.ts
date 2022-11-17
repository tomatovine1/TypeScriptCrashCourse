// enum is a structure that proposes several allowed values for a variable, constrains values by defining possible entries
//enums can have explicit and implicit values

//string type enums require value for every member
enum MyStringEnum {
    ChoiceA = "A",
    ChoiceB = "B",
}

//A mixed enum value type is acceptable if every member is defined. 
enum MyStringAndNumberEnum {     
    ChoiceA, // 0     
    ChoiceB = "B",     
    ChoiceC = 100 
}

//enum must have a name and accepted values. Afterward, you can use the enum as a type.

enum MyEnum {
    ChoiceA,
    ChoiceB,
    ChoiceC,
}
let sex: MyEnum = MyEnum.ChoiceA; //. The consumer must use the enum with its name followed by a dot and a potential value from the defined list
console.log(x);

//The values are all constants starting from 0 for the first item and increading by 1 if implicitly definned
enum MyEnum {
    ChoiceA,
    ChoiceB,
    ChoiceC,
}
enum MyEnum2 {
    ChoiceA, // 0
    ChoiceB = 100, // 100
    ChoiceC, // 101
    ChoiceD = MyEnum.ChoiceC, // 2
}
console.log(MyEnum2.ChoiceA);  //0
console.log(MyEnum2.ChoiceB);  //100
console.log(MyEnum2.ChoiceC);  //101
console.log(MyEnum2.ChoiceD);  //2

//enum member values can be set or computed
//computed enums are constant by addition subtraction bitwise modulo * / or and xor or compliment and purely computed come from a function

/*
enum MyEnum {
    ChoiceA,
    ChoiceB,
    ChoiceC,
} */
// Became in JavaScript:

var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["ChoiceA"] = 0] = "ChoiceA";
    MyEnum[MyEnum["ChoiceB"] = 1] = "ChoiceB";
    MyEnum[MyEnum["ChoiceC"] = 2] = "ChoiceC";
})(MyEnum || (MyEnum = {}));

/*
enum MyEnum2 {
    ChoiceA, // 0
    ChoiceB = 100, // 100
    ChoiceC, // 101
    ChoiceD = MyEnum.ChoiceC, // 2
}
*/

//Because in JavaScript
var MyEnum2;
(function (MyEnum2) {
    MyEnum2[MyEnum2["ChoiceA"] = 0] = "ChoiceA";
    MyEnum2[MyEnum2["ChoiceB"] = 100] = "ChoiceB";
    MyEnum2[MyEnum2["ChoiceC"] = 101] = "ChoiceC";
    MyEnum2[MyEnum2["ChoiceD"] = 2] = "ChoiceD";
})(MyEnum2 || (MyEnum2 = {}));

//bitwise enum use
enum Power {
    None = 0, // Value 0 in decimal (00 in binary)
    Invincibility = 1 << 0, // Value 1 in decimal (01 in binary)
    Telepathy = 1 << 1, // Value 2 in decimal (10 in binary)
    Invisibility = 1 << 2, // Value 4 in decimal (100 in binary)
    Everything = Invincibility | Telepathy | Invisibility,  //111
}
let power: Power = Power.Invincibility | Power.Telepathy; //or of 01 10 is 11
console.log("Power values:" + power);
if (Power.Telepathy === (power & Power.Telepathy)) {
    console.log("Power of telepathy available");
}

//to subtract value from a bitwise, use &= ~ which ands the inverse

power &= ~Power.Telepathy;    // takes the 10)b off
console.log("Power values:" + power);
if (Power.Telepathy === (power & Power.Telepathy)) {
    console.log("Power of telepathy available");
}

//adding everything or seting everything to 0b111
power |= 7; // 7 is 0b111 in binary
console.log("Power values:" + power);
if (power === Power.Everything) {
    console.log("Everything");
}