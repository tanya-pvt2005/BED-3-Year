const fs = require("fs");
console.log("start");
setTimeout(()=>{
    console.log("timer callback")
},0)
setImmediate(()=>{
    console.log("set immediate callback")
})
fs.readFile("demo.txt",()=>{
    console.log("poll phase callback")
    setTimeout(()=>{
        console.log("Timer 2")
    },0)
    setImmediate(()=>{
        console.log("Immediate 2")
    })
})
console.log("end");