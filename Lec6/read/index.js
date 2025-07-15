const fs = require("fs")

fs.readFile("../demo.txt", function(err, data){
    if(err) console.log(err)
        console.log(data.toString()) 
})

fs.readFile("../file.txt", "utf-8" ,function(err, data){
    if(err) console.log(err)
        console.log(data) 
})