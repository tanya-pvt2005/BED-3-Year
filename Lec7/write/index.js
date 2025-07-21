let users = [
    {
        "Name" : "Tanya",
        "age" : "24",
        "address" : "Chandigarh"
    },
    {
        "Name" : "Sehaj",
        "age" : "24",
        "address" : "Chandigarh"
    }
]

const fs = require("fs")


//object cannot be written into a file directly
//object needs to be converted to json: function Stringify()=> key value both becomes string
fs.writeFile("./users.txt",JSON.stringify(users), (err)=>{
    if(err) console.log(err)
    console.log("users written")
})