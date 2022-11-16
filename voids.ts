//void type

//the act of not returning anything
//for ecample, a function that logs, is of type void
function logMessage(message: string) {
    console.log(message);
  }

  //void can not hold any data
  //It can be undefined or null if strictNullChecks is off

  // the compiler doesnt like the third line of the following, as it trys to assign a string no void
  let whatCanIHold: void;
whatCanIHold = undefined;
whatCanIHold = "something";