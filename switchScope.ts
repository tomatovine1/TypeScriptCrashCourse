//How switch affects scope

function sF (a: number): void {
    switch(a) {
        case 1:
            let v1 = "this";
            console.log(v1)
            break;
        case 2:
            let v2 = "that"
            console.log(v2)
        default:
            console.log("switch")
    }
}
sF(1);
sF(2);
sF(3);
//prints this
//       that
//       switch

//not adding break in a case counts that case leading to the next one
//the below example prints case 1 as well when case 2 is called

function switchFunction(a: number): void {
    switch (a) {
        case 1:
            let variableInCase1 = "test";
            console.log(variableInCase1);
        case 2:
            let variableInCase2 = "test2";
            console.log(variableInCase2);
            break;
        default:
         // console.log("Default");    
    }
}
switchFunction(1);
switchFunction(2);
switchFunction(3);

//it is suggested to use curly braces for each case to preserve its scope as per ECMAScript
//.. this way, the same local variable name will not be problematic 
//example below 

function switchFunction(a: number): void {
    switch (a) {
        case 1: {
            let variableInCase1 = "test";
            console.log(variableInCase1);
            break;
        }
        case 2: {
            let variableInCase1 = "test2";
            console.log(variableInCase1);
            break;
        }
    }
}
switchFunction(1);
switchFunction(2); 
