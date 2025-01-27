// In Javascript arrays can be heterogeneous, maybe we want old-fashioned homogeneous elements
let someNumbers: number[]
someNumbers = [2,4,6,8,9]
someNumbers = [1,3,5,"seven"]

let someOtherNumbers: number[] | string[]
someOtherNumbers = [1,3,5,"seven"]  // doesn't work! the union type says all numbers or all strings
someOtherNumbers = [1,3,5] // ok
someOtherNumbers = ["one","three"]  // ok

// but what if we want to allow each element to be of a union type
let someOtherNumbers2: (number | string)[]
someOtherNumbers2 = [1,3,5]          // ok
someOtherNumbers2 = ["one","three"]  // ok
someOtherNumbers2 = [1,3,5,"seven"]  // ok!

// sometimes in JS we may declare an array using the Array type. Here we can use a generic
let someArray: Array<number>   // same as someNumbers at top ": number[]"

// an edge case for using arrays is to return multiple values from an expression
// but our JS arrays can be sparse and dynamically resized, and this is not good for
// this edge case. A tuple more be more what you want:
let pairTuple: [string, number]
pairTuple = ["foo", 3, "bar"]    // nope length = 3
pairTuple = [3, "foo"]           // nope out of order
pairTuple = ["foo", 3]           // that is better
pairTuple[5] = "bar"             // that is not

