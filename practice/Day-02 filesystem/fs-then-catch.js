const fs=require("fs/promises")

// create and overwrite content:
// fs.writeFile("data.txt","line1 added data")
// .then(()=>console.log("File created successfully"))
// .catch((e)=>console.log(e))

// append content:
// fs.appendFile("data.txt","\n Line22 data")
// .then(()=>console.log("appended data"))
// .catch(()=>console.log("error"))

// append content:
// fs.unlink("data.txt")
// .then(()=>console.log("deleted file"))
// .catch(()=>console.log("error"))

// read content:
// fs.readFile("data.txt","utf8")
// .then((data)=>console.log("file data: ",data))
// .catch((err)=>console.log(err))