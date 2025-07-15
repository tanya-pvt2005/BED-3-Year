//node js also gives built in modules to perform operations like js
const fs = require('fs')

fs.writeFile("../demo.txt", "Tanya Upadhyay", function(err){
    if(err) return console.log(err)
        console.log("hahahah")
})
console.log("Tanya")
fs.writeFile("../file.txt", "Sehaj Kundra", function(err){
    if(err) return console.log(err)
        console.log("file2 executed")
})