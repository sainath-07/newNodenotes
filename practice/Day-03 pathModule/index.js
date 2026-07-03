const path = require("path")

console.log({folder: __dirname})
console.log({file: __filename})


// 1.
const filePath = "/user/sainath/index.js"
console.log("basename: ",path.basename(filePath))
console.log("basename with out extension: ",path.basename(filePath,".js")) 
//returns endpoint without extension
// returns last end point like filename or folder name


//2. dirname()
console.log("dirname: ",path.dirname(filePath))
// returns only direcotry with filename

// 3. extname
console.log("extname:  ",path.extname(filePath))
// returns only extension

// 4. join
// only adds given string
console.log("join: ",path.join("desktop","sainath","app.js"))
// join:  desktop\sainath\app.js


// 5. resolve
// appends given path to root directory
console.log("resolve: ",path.resolve("newdesktop","veda","veda.js"))
// resolve:  C:\Users\SAINATH\Desktop\new_nodesjs\mohith_decodes\practice\Day-03 pathModule\newdesktop\veda\veda.js


// 6.parse
console.log("parse:  ",path.parse(filePath))
// parse:   {
//   root: '/',
//   dir: '/user/sainath',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }