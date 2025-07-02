const fs = require("fs");
console.log("start");

setTimeout(()=>{
    console.log("timer callback")
},0)
setImmediate(()=>{
    console.log("set immediate callback")
})
function dosometask(){
    return new Promise((resolve, reject)=>{
        resolve("Promise chala")
    })
}
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
dosometask().then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
process.nextTick(()=>{
    console.log("next tick")
})
