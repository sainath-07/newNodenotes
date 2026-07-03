// http server code
// const http=require("http")
// const server= http.createServer((req,res)=>{

//        res.writeHead(200,{'Content-Type':"text/html"})
//        res.write("<h1>Simple http server code</h1>")
//        res.end()
// })



// simple https server code

const https=require("https")
const fs=require("fs")


// default security keys by https

const options={
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("key.pem")
}

const server=https.createServer(options,(req,res)=>{
    res.writeHead(200,{'Content-Type':"text/html"})
       res.write("<h1>Simple http server code</h1>")
       res.end()
})

// server to run for both http and https

server.listen(3000,()=>{
    console.log("http server is running on 3000 port")
})