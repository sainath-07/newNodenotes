const http= require("http")

const server = http.createServer((req,res)=>{

    if(req.url==="/"){
        res.writeHead(200,{"content-type" : ""})
        res.write('hello world,  ABC')
        res.end()
    }
    else if(req.url==="/html"){
        res.writeHead(200,{"content-type": "text/html"})
        res.write("<h1>hello world</h1>")
        res.end()
    }
    else if(req.url==="/applicationjson"){
        res.writeHead(200,{"content-type": "application/json"})
        res.write(JSON.stringify({name : "sainath",age:20}))
        res.end()
    }
    
})


// below syntax is like event listner , which listens here node automatically trigger listen method , we donot need to  trigger manually to run server.
server.listen(3000,()=>{
    console.log("Server is running")
})