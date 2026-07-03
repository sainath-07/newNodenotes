console.log(__dirname)
console.log(__filename)

const fs=require("fs")

// console.log("process: ",process)
console.log("process pid: ",process.pid)
console.log("process cmd: ",process.cwd())
console.log("process platform: ",process.platform)
console.log("process version: ",process.version) //node version
console.log("process env user: ",process.env.USER)
console.log("process exit: ",process.exit())