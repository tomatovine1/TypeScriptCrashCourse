//integers are directly accesable
//strings are not
//such that enum name followed by the name of the constant gets the value
//with number, you can use the value to return the name
//TS generates a map object which gives access using the  name or the entry or the value

enum Orientation {
    East,
    West,
    North,
    South,
}
let directionInNumber = Orientation.East; // Access with the Enum
let directionInString = Orientation[0];  // Access the Enum string from number
console.log(directionInNumber);
console.log(directionInString);

//the same is not possible with string values of enum

enum OrientationString {
    East = "E",
    West = "W",
    North = "N",
    South = "S",
}
let directionInNumber1 = OrientationString.East; // Access with the Enum
let directionInString1 = OrientationString[0];  // Access the Enum string from number
let directionInString2 = OrientationString["E"];  // Access the Enum string from number

console.log(directionInString2);

//the first example in javascript would look like
/*
let Orientation;
(function (Orientation) {
    Orientation[Orientation["East"] = 0] = "East";
    Orientation[Orientation["West"] = 1] = "West";
    Orientation[Orientation["North"] = 2] = "North";
    Orientation[Orientation["South"] = 3] = "South";
})(Orientation || (Orientation = {}));
let directionInNumber = Orientation.East;
let directionInString = Orientation[0];
console.table(Orientation);  //shows how the values are acced

Output
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│    0    │ 'East'  │
│    1    │ 'West'  │
│    2    │ 'North' │
│    3    │ 'South' │
│  East   │    0    │
│  West   │    1    │
│  North  │    2    │
*/
