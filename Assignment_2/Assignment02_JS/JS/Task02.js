// Provide different inputs to following functions in given code and see what they return (you may
// use console.log to print output) Number parseInt parseFloat
// For example
// var abc = Number("1212a");
// console.log(abc);

// Number

let num0= Number("786");
console.log(num0); // Output: 786

var num1=Number("1212abc");
console.log(num1); // Output: NaN

const num2 = Number(true);
console.log(num2); // Output: 1

const num3 = Number(false);
console.log(num3); // Output: 0

let num4 = Number(null);
console.log(num4); // Output: 0

const num5 = Number(undefined);
console.log(num5); // Output: NaN



// parseInt
let int1 = parseInt("1234567");
console.log(int1); // Output: 1234567

var int2 = parseInt("123abc");
console.log( int2); // Output: 123

const int3 = parseInt("abc123");
console.log( int3); // Output: NaN



// parseFloat
var float1 = parseFloat("3.14");
console.log( float1); // Output: 3.14

let float2 = parseFloat("3.14abc");
console.log( float2); // Output: 3.14

const float3 = parseFloat("abc3.14");
console.log( float3); // Output: NaN



