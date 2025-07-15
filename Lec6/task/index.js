const fs = require("fs")
let str = ""

fs.readFile("../demo.txt", "utf-8", function (err, data) {

    str += data
    str += " "

    fs.readFile("../file.txt", "utf-8", function (err, data) {

        str += data

        fs.writeFile("../task.txt", str, function (err) {
            if (err) return console.log(err)
            console.log("appended")
        })
    })

    //solve for whitespaces in file (remove them)
})



