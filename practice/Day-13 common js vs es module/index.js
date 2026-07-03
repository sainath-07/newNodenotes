
// commonJS importing
// const {add}=require("./math.js")
// console.log("Add function data: ",add(2,2))


// ES Modules importing
// import add ,{multiple} from "./math.js"
// console.log("add: ",add(3,3))
// console.log("multiple: ",multiple(3,3))

// importing default with different names directly
// we can import default export with any name but we can not import named exports with any name
// we can have only one default export in whole file
//  we can have multiple named export in whole file.
// import adding from "./math.js"
// console.log("adding: ",adding(9,9))

// alias : renaming imports
// Remaining whole moudle.
import  * as a from "./math.js"
console.log("add: ",a.add(2,2))

// renaming named export
import {subtract  as s} from "./math.js"
console.log("subtract: ",s(4,2))
