// callback function example:

// example1:
// function greet(name,fun){
//     console.log("hello: "+ name)
//     fun()
// }

// function callme(){
//     console.log("i am callbackfunction")

// }

// greet("sainath",callme)


// example2:
// const fs = require("fs");

// fs.readFile("data1.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log("read file error: ", error);
//     return;
//   }

//   console.log("read file data:  ", data);
// });

//  callback hell example

// const fs=require("fs")
// fs.readFile("data1.txt","utf8",(error,data1)=>{

//     fs.readFile("data2.txt","utf8",(error,data2)=>{

//         fs.readFile("data3.txt","utf8",(error,data3)=>{

//             console.log("data1 file: ",data1)
//             console.log("data2 file: ",data2)
//             console.log("data3 file: ",data3)

//         })

//     })

// })


// how to aviod call back hell example:
const fs=require("fs")

const readMultipleFiledata=async()=>{
    try {

        const data1 = await fs.readFileSync("data1.txt","utf8")
        const data2 =  await fs.readFileSync("data2.txt","utf8")
        const data3 =  await fs.readFileSync("data3.txt","utf8")
        console.log({data1,data2,data3})
        
    } catch (error) {
        console.log("Error in readMultipleFiledata______: ",error)
    }
}

readMultipleFiledata()