const fs = require("fs")

// read file with async
// fs.readFile("text.txt","utf8",(error, data)=>{
    // if(error){
    //     console.log("Error: ",error)
    // }

    // console.log("Read file with Async: ",data)

// })

// read file with sync
// const data=fs.readFileSync("text.txt","utf8")
// console.log("Read file with Sync: ",data)

// write file
// doesnot returns any data , just create and overwrites a file.
// fs.writeFile('data.txt',"hello write file created",(error)=>{
//     if(error) console.log("Error: ",error)
//     console.log("create and overwrites content ")
// })

// // append file
// fs.appendFile('data.txt',"\n hello appended file data",(error)=>{
//     if(error) console.log("Error: ",error)
    
//     console.log("added content in data.txt file")
// })


// delete file
// fs.unlink("text.txt",(error)=>{
//     if(error){
//         console.log("Error while deleting file: ",error)
//     }
//     else{
//         console.log("File deleted successfully")
//     }

// })


fs.rename("data.txt","new_data.txt",(error)=>{
 if(error) console.log("error while renamining file: ",error)
 console.log("File renamed successfully")
})