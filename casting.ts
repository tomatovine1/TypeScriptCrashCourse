//casting with <> or as
//<> incompatible with JSX/TSX

//an unknown cast to a number
const unknownType: unknown = "123"
const cast1: number = <number>unknownType;
const cast2: number = unknownType as number;

//trying to cast to a string directly without using unknown, will return:
/* 
'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. 
If this was intentional, convert the expression to 'unknown' first.*/

//fixed by doublecasting
const str: string = "123";
const bool: boolean = true;
const castFromString:number= (str as unknown) as number;
const castFromBoolean:boolean = (bool as unknown) as boolean;
console.log(castFromString)
console.log(castFromBoolean)

//type assertion is used to tell TS what type an object is

interface YT {
    m1:string;
}

let typeseerer = {m1:"5123051"} as YT;
console.log(typeseerer)

//a case exists where you case an exmpty object ti an interface.  this will compile
interface IMyType {
    m1: string;
    m2: number;
  }
  
  let myVariable = {} as IMyType; // 

  //casting has to be used in JSON payload assignment.  Here make sure the data is in a expected format. otherwise makeing them optional with undefined type

//cannot cast a typed object into something that is not a subtype of the original type. 
//When going from a subtype to a type, without casting, the problem is that TypeScript will only validate access to the public type from the desired interface
//(see below), TypeB has two members; when casting, it only exposes (at design time) the first member (TypeA)

interface ICast1 { m1: string } 
interface ICast2 { m1: string, m2: string } 
let icast1: ICast1 = { m1: "m1" }; 
let icast2: ICast2 = { m1: "m1", m2: "m2" }; 
let icast3: ICast1 = icast2; // work without cast because of the structure 
console.log(icast1);
console.log(icast2);
console.log(icast3);

//icast2 = icast1; // doesn't work, miss a member 
let icast4: ICast2 = icast1 as ICast2; // work but m2 undefined 
console.log(icast4); // { m1: 'm1' } // m2 is missing even if not optional 

// non-optional members that aren’t present will be undefined even if the contract specifies that the type must have the member
interface ITypeA { m1: string } 
interface ITypeB extends ITypeA { m2: string } 
interface ITypeC extends ITypeB { m3: string } 
const typea: ITypeA = { m1: "m1" }; 
const typeb: ITypeB = { m1: "m1", m2: "m2" }; 
let typeb2: ITypeB = typea as ITypeB; // Work (m2 will be missing!!!) 
let typea2: ITypeA = typeb; // No cast needed 
console.log(typea2); // { m1: 'm1', m2: 'm2' } However, only m1 is accessible at compilation 
let m2 = typea2.m2; //not present at runtime

//casting is mainly used to get untyped objects
//when creating a new type, explicitly declare rather than cast
