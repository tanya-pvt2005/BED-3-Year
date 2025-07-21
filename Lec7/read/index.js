
const fs = require("fs")

//reading json data from file to console

fs.readFile("./users.txt", "utf-8", (err, data) => {
    if (err) console.log(err)
    console.log(data)

    let obj = JSON.parse(data)
    console.log(obj[0])
    
})