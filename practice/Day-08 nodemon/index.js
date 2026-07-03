const http=require("http")
const server=http.createServer((req,res)=>{
     res.writeHead(200,{'content-type':"application/json"})
     res.write(JSON.stringify({name: "sainath"}))
     res.end()
})

server.listen(3000,()=>{
    console.log("SERVER HAS BEEN STARTED SUCCESSFULLY")
})

// nodemon command:
// nodemon filename
// once check package.json file.