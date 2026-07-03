const fs= require("fs/promises")

const writeExample=async()=>{
      try {

        await fs.writeFile("data1.txt","line1 added")
        console.log("File created successfully")
        
      } catch (error) {
        console.log("error while writing file: ",error)
      }
}


const appendExample=async()=>{
     try {
        await  fs.appendFile("data1.txt","\n line2 added")
        console.log('added content')
     } catch (error) {
        console.log("append error: ",error)
     }
}



const  readExample=async()=>{
    try {
        
        const data=await fs.readFile("data1.txt","utf8")
        console.log("readFileData:\n", data)
    } catch (error) {
        console.error("error: ",error)
        
    }
}


const deleteFile=async()=>{
    try {

        await fs.unlink("data1.txt")
        console.log("File deleted successfully")
        
    } catch (error) {
        console.log("error: ",error)
    }
}

// deleteFile()
writeExample()
appendExample()
// readExample()
