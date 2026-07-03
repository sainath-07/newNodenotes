
// Built in modules
const os = require('os')

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
console.log(os.freemem());
console.log(os.totalmem());

// local modules
const add =require("./math")
console.log("addition of 2 numbers: ",add(2,3))


// third party modules
const chalk = require("chalk")
console.log(chalk.green("hello world"))

