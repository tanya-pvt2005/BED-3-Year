//syntax of promise
let p = new Promise((resolve, reject)=>{
    // resolve("promise is fulfilled")
    reject("promise is rejected")
})

console.log(p)

// const fs = require("fs")

// fs.readFile("filepath", "utf-8",(err,message)=>{
//     //do something
// })

//promise for fs (not callback this time)

p.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})